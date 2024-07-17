use std::fmt::format;

use crate::origin;
use crate::*;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct NativeError {
    pub severity: Severity,
    pub kind: NativeErrorKind,
    pub message: Option<String>,
}

impl TryFrom<error::NativeError> for NativeError {
    type Error = E;
    fn try_from(v: error::NativeError) -> Result<Self, Self::Error> {
        Ok(NativeError {
            severity: v.severity.try_into()?,
            message: if v.message.is_empty() {
                None
            } else {
                Some(v.message)
            },
            kind: v.kind.try_into()?,
        })
    }
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq, Clone)]
pub enum Severity {
    WARNING,
    ERROR,
}

impl TryFrom<error::Severity> for Severity {
    type Error = E;
    fn try_from(v: error::Severity) -> Result<Self, Self::Error> {
        Ok(match v {
            error::Severity::Warning => Self::WARNING,
            error::Severity::Error => Self::ERROR,
        })
    }
}

impl TryFrom<i32> for Severity {
    type Error = E;
    fn try_from(v: i32) -> Result<Self, Self::Error> {
        Ok(match v {
            0 => Self::WARNING,
            1 => Self::ERROR,
            _ => Err(E::InvalidValue(format!("Fail parse Severity from \"{v}\"")))?,
        })
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum NativeErrorKind {
    FileNotFound,
    UnsupportedFileType,
    ComputationFailed,
    Configuration,
    Interrupted,
    OperationSearch,
    NotYetImplemented,
    ChannelError,
    Io,
    Grabber,
}

impl TryFrom<i32> for NativeErrorKind {
    type Error = E;
    fn try_from(v: i32) -> Result<Self, Self::Error> {
        Ok(match v {
            0 => Self::FileNotFound,
            1 => Self::UnsupportedFileType,
            2 => Self::ComputationFailed,
            3 => Self::Configuration,
            4 => Self::Interrupted,
            5 => Self::OperationSearch,
            6 => Self::NotYetImplemented,
            7 => Self::ChannelError,
            8 => Self::Io,
            9 => Self::Grabber,
            _ => Err(E::InvalidValue(format!(
                "Fail parse NativeErrorKind from \"{v}\""
            )))?,
        })
    }
}
