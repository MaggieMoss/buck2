/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::io;

fn main() -> io::Result<()> {
    let proto_files = &["downward_api.proto"];

    // Tonic build uses PROTOC to determine the protoc path.
    println!("cargo:rerun-if-env-changed=PROTOC");
    buck2_protoc_dev::maybe_setup_protoc("../../../..");
    tonic_build::configure()
        .protoc_arg("--experimental_allow_proto3_optional")
        .compile(proto_files, &["."])?;

    // Tell Cargo that if the given file changes, to rerun this build script.
    for proto_file in proto_files {
        println!("cargo:rerun-if-changed={}", proto_file);
    }

    Ok(())
}
