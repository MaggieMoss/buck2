/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::fmt::Debug;
use std::sync::Arc;

use anyhow::Context as _;
use async_trait::async_trait;
use buck2_core::fs::project::ProjectRelativePathBuf;
use buck2_execute::materialize::materializer::DeferredMaterializerEntry;
use buck2_execute::materialize::materializer::DeferredMaterializerExtensions;
use buck2_execute::re::manager::ReConnectionManager;
use chrono::Duration;
use chrono::Utc;
use derivative::Derivative;
use derive_more::Display;
use futures::stream::BoxStream;
use futures::stream::StreamExt;
use gazebo::prelude::*;
use tokio::sync::mpsc;
use tokio::sync::mpsc::UnboundedSender;
use tokio::sync::oneshot;
use tokio::sync::oneshot::Sender;
use tokio::task::JoinHandle;
use tokio_stream::wrappers::UnboundedReceiverStream;

use crate::materializers::deferred::ArtifactMaterializationMethod;
use crate::materializers::deferred::ArtifactMaterializationStage;
use crate::materializers::deferred::ArtifactTree;
use crate::materializers::deferred::DeferredMaterializer;
use crate::materializers::deferred::MaterializerCommand;
use crate::materializers::deferred::WithPathsIterator;

pub(super) trait ExtensionCommand: Debug + Sync + Send + 'static {
    fn execute(self: Box<Self>, tree: &ArtifactTree, re_manager: &Arc<ReConnectionManager>);
}

#[derive(Debug, Display)]
enum PathData {
    #[display(fmt = "materialized")]
    Materialized,

    #[display(fmt = "declared: {}", .0)]
    Declared(Arc<ArtifactMaterializationMethod>),
}

impl DeferredMaterializerEntry for PathData {}

#[derive(Derivative)]
#[derivative(Debug)]
struct Iterate {
    /// This is for debug commands so we use an unbounded channel to avoid locking up the
    /// materializer command thread.
    #[derivative(Debug = "ignore")]
    sender: UnboundedSender<(ProjectRelativePathBuf, Box<dyn DeferredMaterializerEntry>)>,
}

impl ExtensionCommand for Iterate {
    fn execute(self: Box<Self>, tree: &ArtifactTree, _re_manager: &Arc<ReConnectionManager>) {
        for (path, data) in tree.iter().with_paths() {
            let path_data = match &data.stage {
                ArtifactMaterializationStage::Declared { method, .. } => {
                    PathData::Declared(method.dupe())
                }
                ArtifactMaterializationStage::Materialized { .. } => PathData::Materialized,
            };

            match self.sender.send((path, box path_data as _)) {
                Ok(..) => {}
                Err(..) => break, // No use sending more if the client disconnected.
            }
        }
    }
}

#[derive(Derivative)]
#[derivative(Debug)]
struct RefreshTtls {
    sender: Sender<Option<JoinHandle<anyhow::Result<()>>>>,
    min_ttl: i64,
}

impl ExtensionCommand for RefreshTtls {
    fn execute(self: Box<Self>, tree: &ArtifactTree, re_manager: &Arc<ReConnectionManager>) {
        let mut digests_to_refresh = vec![];

        let ttl_deadline = Utc::now() + Duration::seconds(self.min_ttl);

        for (_, data) in tree.iter() {
            match &data.stage {
                ArtifactMaterializationStage::Declared { method, .. } => match method.as_ref() {
                    ArtifactMaterializationMethod::CasDownload { info } => {
                        if let Some(action_digest) = info.action_digest() {
                            if action_digest.expires() <= ttl_deadline {
                                digests_to_refresh.push((action_digest.dupe(), info.re_use_case));
                            }
                        }
                    }
                    _ => {}
                },
                _ => {}
            }
        }

        let task = if digests_to_refresh.is_empty() {
            None
        } else {
            let re_manager = re_manager.dupe();

            Some(tokio::task::spawn(async move {
                let re_connection = re_manager.get_re_connection();
                let re_client = re_connection.get_client();
                let re_client = &re_client;

                futures::future::join_all(digests_to_refresh.iter().map(
                    |(digest, use_case)| async move {
                        // A side effect of action cache queries is to refresh the underlying outputs.
                        match re_client
                            .action_cache(digest.data().dupe(), *use_case)
                            .await
                        {
                            Ok(Some(res)) => {
                                let expires = Utc::now() + Duration::seconds(res.ttl);
                                digest.update_expires(expires);
                                tracing::debug!(
                                    "Updated expiry for action `{}`: {}",
                                    digest,
                                    expires
                                )
                            }
                            Ok(None) => {
                                tracing::info!(
                                    "Action `{}` is referenced by materializer, but expired",
                                    digest
                                );
                            }
                            Err(e) => {
                                tracing::info!(
                                    "Failed to query action cache for action `{}`: {:#}",
                                    digest,
                                    e
                                );
                            }
                        }
                    },
                ))
                .await;

                // Currently we don't propagate errors back here.
                Ok(())
            }))
        };

        let _ignored = self.sender.send(task);
    }
}

#[async_trait]
impl DeferredMaterializerExtensions for DeferredMaterializer {
    fn iterate(
        &self,
    ) -> anyhow::Result<
        BoxStream<'static, (ProjectRelativePathBuf, Box<dyn DeferredMaterializerEntry>)>,
    > {
        let (sender, receiver) = mpsc::unbounded_channel();
        self.command_sender
            .send(MaterializerCommand::Extension(box Iterate { sender } as _))?;
        Ok(UnboundedReceiverStream::new(receiver).boxed())
    }

    async fn refresh_ttls(&self, min_ttl: i64) -> anyhow::Result<()> {
        let (sender, receiver) = oneshot::channel();
        self.command_sender.send(MaterializerCommand::Extension(
            box RefreshTtls { sender, min_ttl } as _,
        ))?;
        match receiver.await.context("No response from materializer")? {
            Some(task) => task
                .await
                .context("Refresh task aborted")?
                .context("Refresh failed")?,
            None => {}
        };
        Ok(())
    }
}
