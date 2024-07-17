use crate::{event, origin::*, E};
use prost::Message;
use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::to_value;
use std::collections::HashMap;
use wasm_bindgen::prelude::*;
use wasm_bindgen_test::console_log;

#[derive(Debug, Serialize, Deserialize)]
pub struct OperationDone {
    pub uuid: String,
    pub result: Option<String>,
}

impl TryFrom<event::OperationDone> for OperationDone {
    type Error = E;
    fn try_from(v: event::OperationDone) -> Result<Self, Self::Error> {
        Ok(OperationDone {
            uuid: v.uuid,
            result: if v.result.is_empty() {
                None
            } else {
                Some(v.result)
            },
        })
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub enum CallbackEvent {
    StreamUpdated(u64),
    FileRead,
    SearchUpdated {
        found: u64,
        stat: HashMap<String, u64>,
    },
    IndexedMapUpdated {
        len: u64,
    },
    SearchMapUpdated(Option<String>),
    SearchValuesUpdated(Option<HashMap<u8, (i64, i64)>>),
    AttachmentsUpdated {
        len: u64,
        attachment: AttachmentInfo,
    },
    Progress {
        uuid: String,
        progress: Progress,
    },
    SessionError(NativeError),
    OperationError {
        uuid: String,
        error: NativeError,
    },
    OperationStarted(String),
    OperationProcessing(String),
    OperationDone(OperationDone),
    SessionDestroyed,
}

impl TryFrom<event::CallbackEvent> for CallbackEvent {
    type Error = E;
    fn try_from(ev: event::CallbackEvent) -> Result<Self, Self::Error> {
        use event::callback_event::Event;

        let Some(event) = ev.event else {
            return Err(E::MissedField(String::from("event")));
        };
        Ok(match event {
            Event::AttachmentsUpdated(v) => CallbackEvent::AttachmentsUpdated {
                len: v.len,
                attachment: AttachmentInfo::try_from(
                    v.attachment
                        .ok_or(E::MissedField(String::from("attachment")))?,
                )?,
            },
            Event::FileRead(_) => CallbackEvent::FileRead,
            Event::Progress(p) => CallbackEvent::Progress {
                uuid: p.uuid.clone(),
                progress: p.try_into()?,
            },
            Event::OperationDone(v) => CallbackEvent::OperationDone(v.try_into()?),
            Event::OperationProcessing(v) => CallbackEvent::OperationProcessing(v),
            Event::OperationStarted(v) => CallbackEvent::OperationStarted(v),
            Event::SessionDestroyed(_) => CallbackEvent::SessionDestroyed,
            Event::IndexedMapUpdated(v) => CallbackEvent::IndexedMapUpdated { len: v.len },
            Event::SearchMapUpdated(v) => CallbackEvent::SearchMapUpdated(if v.update.is_empty() {
                None
            } else {
                Some(v.update)
            }),
            Event::SearchUpdated(v) => CallbackEvent::SearchUpdated {
                found: v.found,
                stat: v.stat,
            },
            Event::StreamUpdated(v) => CallbackEvent::StreamUpdated(v),
            Event::SearchValuesUpdated(v) => {
                CallbackEvent::SearchValuesUpdated(if v.values.is_empty() {
                    None
                } else {
                    console_log!("RS: SearchValuesUpdated: {v:?}");
                    let values = v
                        .values
                        .into_iter()
                        .map(|(k, v)| (k as u8, (v.min as i64, v.max as i64)))
                        .collect::<HashMap<u8, (i64, i64)>>();
                    console_log!("RS: SearchValuesUpdated (values): {values:?}");
                    Some(values)
                })
            }
            Event::SessionError(v) => CallbackEvent::SessionError(v.try_into()?),
            Event::OperationError(v) => CallbackEvent::OperationError {
                uuid: v.uuid,
                error: v
                    .error
                    .ok_or(E::MissedField(String::from("error")))?
                    .try_into()?,
            },
        })
    }
}

#[wasm_bindgen]
pub fn decode(buf: &[u8]) -> Result<JsValue, E> {
    let msg = event::CallbackEvent::decode(buf)?;
    console_log!("DECODED: {msg:?}");
    let cb_event: CallbackEvent = msg.try_into()?;
    console_log!("CONVERTED: {cb_event:?}");
    Ok(to_value(&cb_event)?)
}

#[wasm_bindgen]
#[derive(Debug, Serialize, Deserialize)]
pub struct TestMapA {
    a: HashMap<u8, (f64, f64)>,
    b: HashMap<i64, (f64, f64)>,
    c: HashMap<String, (f64, f64)>,
    d: HashMap<i32, i32>,
    e: Vec<i32>,
}

impl TestMapA {
    pub fn gen() -> Self {
        let mut a: HashMap<u8, (f64, f64)> = HashMap::new();
        let mut b: HashMap<i64, (f64, f64)> = HashMap::new();
        let mut c: HashMap<String, (f64, f64)> = HashMap::new();
        let mut d: HashMap<i32, i32> = HashMap::new();
        a.insert(1, (1.0, 2.0));
        a.insert(2, (3.0, 4.0));
        a.insert(3, (5.0, 6.0));
        a.insert(4, (7.0, 8.0));
        b.insert(1, (1.0, 2.0));
        b.insert(2, (3.0, 4.0));
        b.insert(3, (5.0, 6.0));
        b.insert(4, (7.0, 8.0));
        c.insert(String::from("1"), (1.0, 2.0));
        c.insert(String::from("2"), (3.0, 4.0));
        c.insert(String::from("3"), (5.0, 6.0));
        c.insert(String::from("4"), (7.0, 8.0));
        d.insert(1, 2);
        d.insert(3, 4);
        d.insert(5, 6);
        d.insert(7, 8);
        Self {
            a,
            b,
            c,
            d,
            e: vec![1, 2, 3, 4],
        }
    }
}

#[wasm_bindgen]
pub fn get_wasm_bindgen() -> TestMapA {
    TestMapA::gen()
}

#[wasm_bindgen]
pub fn get_serde_wasm_bindgen() -> JsValue {
    to_value(&TestMapA::gen()).unwrap()
}
