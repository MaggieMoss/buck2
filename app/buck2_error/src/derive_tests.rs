/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

#![cfg(test)]

use crate as buck2_error;

#[derive(buck2_error_derive::Error, Debug)]
#[error("foo")]
#[buck2(input)]
pub struct Error1;

#[test]
fn test_derive_error1() {
    let e: crate::Error = Error1.into();
    assert_eq!(e.get_tier(), Some(crate::Tier::Input));

    let e: anyhow::Error = Error1.into();
    let e: crate::Error = e.into();
    assert_eq!(e.get_tier(), Some(crate::Tier::Input));
}

#[derive(buck2_error_derive::Error, Debug)]
#[error("foo")]
#[buck2(tier0)]
#[allow(unused)]
struct Error2((), ());

#[test]
fn test_derive_error2() {
    let e: crate::Error = Error2((), ()).into();
    assert_eq!(e.get_tier(), Some(crate::Tier::Tier0));
}

#[derive(buck2_error_derive::Error, Debug)]
pub enum Error3 {
    #[error("foo")]
    #[buck2(input)]
    VariantA,
    #[error("bar")]
    #[buck2(tier0)]
    VariantB,
    #[error("baz")]
    VariantC,
}

#[test]
fn test_derive_error3() {
    let e: crate::Error = Error3::VariantA.into();
    assert_eq!(e.get_tier(), Some(crate::Tier::Input));

    let e: crate::Error = Error3::VariantB.into();
    assert_eq!(e.get_tier(), Some(crate::Tier::Tier0));

    let e: crate::Error = Error3::VariantC.into();
    assert_eq!(e.get_tier(), None);
}

#[derive(buck2_error_derive::Error, Debug)]
#[error("Generic error")]
pub struct GenericError<G>(G);

#[test]
fn test_generic_error() {
    let _e: crate::Error = GenericError(42).into();
}

/// Test that no unused fields warning is emitted.
#[derive(buck2_error_derive::Error, Debug)]
#[error("Unused")]
pub struct WithField {
    x: u8,
}

#[test]
fn test_with_field() {
    let _e: crate::Error = WithField { x: 42 }.into();
}

#[derive(buck2_error_derive::Error, Debug)]
#[error("Unused")]
struct NoAttrsStruct;

#[derive(buck2_error_derive::Error, Debug)]
#[error("Unused")]
enum NoAttrsEnum {
    Variant,
}

#[test]
fn test_source_location_no_attrs() {
    let e: crate::Error = NoAttrsStruct.into();
    assert_eq!(
        e.source_location(),
        Some("buck2_error/src/derive_tests.rs::NoAttrsStruct")
    );
    let e: crate::Error = NoAttrsEnum::Variant.into();
    assert_eq!(
        e.source_location(),
        Some("buck2_error/src/derive_tests.rs::NoAttrsEnum::Variant")
    );
}

#[derive(buck2_error_derive::Error, Debug)]
#[error("Unused")]
#[buck2(input)]
enum EnumWithTypeOption {
    Variant,
}

#[test]
fn test_enum_with_type_option() {
    let e: crate::Error = EnumWithTypeOption::Variant.into();
    assert_eq!(e.get_tier(), Some(crate::Tier::Input));
    assert_eq!(
        e.source_location(),
        Some("buck2_error/src/derive_tests.rs::EnumWithTypeOption::Variant"),
    );
}

#[derive(buck2_error_derive::Error, Debug)]
#[error("Unused")]
#[buck2(input)]
struct ErrorWithSpelledOutCategory;

#[test]
fn test_error_with_spelled_out_category() {
    let e: crate::Error = ErrorWithSpelledOutCategory.into();
    assert_eq!(e.get_tier(), Some(crate::Tier::Input));
}

#[test]
fn test_root_is_applied_conditionally() {
    #[derive(buck2_error_derive::Error, Debug)]
    #[error("Unused")]
    struct WatchmanError;

    #[derive(buck2_error_derive::Error, Debug)]
    #[error("Unused")]
    #[buck2(tag = compute(self))]
    enum MaybeWatchmanError {
        Some(#[source] WatchmanError),
        None,
    }

    fn compute(x: &MaybeWatchmanError) -> Option<crate::ErrorTag> {
        match x {
            MaybeWatchmanError::Some(_) => None,
            MaybeWatchmanError::None => Some(crate::ErrorTag::AnyActionExecution),
        }
    }

    let e: crate::Error = MaybeWatchmanError::None.into();
    assert!(e.has_tag(crate::ErrorTag::AnyActionExecution));

    let e: crate::Error = MaybeWatchmanError::Some(WatchmanError).into();
    assert!(e.tags().is_empty());
}

#[test]
fn test_error_tags() {
    fn f(_: &TaggedError) -> Option<crate::ErrorTag> {
        Some(crate::ErrorTag::StarlarkFail)
    }

    #[derive(buck2_error_derive::Error, Debug)]
    #[error("Unused")]
    #[buck2(tag = WatchmanTimeout)]
    enum TaggedError {
        #[buck2(tag = f(self))]
        A,
        #[buck2(tag = WatchmanTimeout)]
        B,
    }

    let a: crate::Error = TaggedError::A.into();
    assert_eq!(
        &a.tags(),
        &[
            crate::ErrorTag::StarlarkFail,
            crate::ErrorTag::WatchmanTimeout
        ]
    );
    let b: crate::Error = TaggedError::B.into();
    assert_eq!(&b.tags(), &[crate::ErrorTag::WatchmanTimeout]);
}

#[test]
fn test_correct_transparent() {
    #[derive(buck2_error_derive::Error, Debug)]
    #[error("Unused")]
    #[buck2(tier0)]
    struct E;

    #[derive(buck2_error_derive::Error, Debug)]
    #[error(transparent)]
    struct T(E);

    let t: crate::Error = T(E).into();
    assert_eq!(t.get_tier(), Some(crate::Tier::Tier0));
}

#[test]
fn test_recovery_through_transparent() {
    #[derive(buck2_error_derive::Error, Debug)]
    #[error("base_display")]
    struct BaseError;

    #[derive(buck2_error_derive::Error, Debug)]
    #[error(transparent)]
    enum PartiallyStructured {
        #[error(transparent)]
        Other(anyhow::Error),
    }

    let base: crate::Error = crate::Error::new(BaseError).tag([crate::ErrorTag::StarlarkFail]);
    let wrapped_direct: crate::Error = PartiallyStructured::Other(base.clone().into()).into();
    let wrapped_recovery: crate::Error =
        anyhow::Error::from(PartiallyStructured::Other(base.into())).into();

    assert!(format!("{:?}", wrapped_direct).contains("base_display"));
    assert!(format!("{:?}", wrapped_recovery).contains("base_display"));

    // FIXME(JakobDegen): Bug: Should be `&[crate::ErrorTag::StarlarkFail]`
    assert_eq!(&wrapped_direct.tags()[..], &[]);
    assert_eq!(&wrapped_recovery.tags()[..], &[]);
}

#[test]
fn test_recovery_through_transparent_buck2_error() {
    #[derive(buck2_error_derive::Error, Debug)]
    #[error("base_display")]
    struct BaseError;

    #[derive(buck2_error_derive::Error, Debug)]
    #[error(transparent)]
    enum PartiallyStructured {
        #[error(transparent)]
        Other(buck2_error::Error),
    }

    let base: crate::Error = crate::Error::new(BaseError).tag([crate::ErrorTag::StarlarkFail]);
    let wrapped_direct: crate::Error = PartiallyStructured::Other(base.clone()).into();
    let wrapped_recovery: crate::Error =
        anyhow::Error::from(PartiallyStructured::Other(base)).into();

    assert!(format!("{:?}", wrapped_direct).contains("base_display"));
    assert!(format!("{:?}", wrapped_recovery).contains("base_display"));

    // FIXME(JakobDegen): Bug: Should be `&[crate::ErrorTag::StarlarkFail]`
    assert_eq!(&wrapped_direct.tags()[..], &[]);
    assert_eq!(&wrapped_recovery.tags()[..], &[]);
}
