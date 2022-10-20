/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::hash::Hash;
use std::sync::Arc;

use buck2_core::buck_path::BuckPath;
use derive_more::Display;
use gazebo::prelude::*;

/// An artifact in the source tree
#[derive(Clone, Debug, Display, Dupe, Hash, PartialEq, Eq, PartialOrd, Ord)]
pub struct SourceArtifact(Arc<SourceArtifactData>);

#[derive(Debug, Display, Hash, PartialEq, Eq, PartialOrd, Ord)]
struct SourceArtifactData(BuckPath);

impl SourceArtifact {
    pub fn new(path: BuckPath) -> Self {
        Self(Arc::new(SourceArtifactData(path)))
    }

    pub fn get_path(&self) -> &BuckPath {
        &self.0.0
    }
}
