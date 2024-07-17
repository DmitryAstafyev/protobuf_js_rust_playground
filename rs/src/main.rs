use event::callback_event;
use event::callback_event::search_values_updated;
use event::callback_event::Event;
use protocol::*;
use serde::Serialize;
use std::collections::HashMap;

enum Target {
    Full,
    Values,
    Success,
}
fn get_values(num: u32) -> HashMap<u32, search_values_updated::ValueRange> {
    let mut values: HashMap<u32, search_values_updated::ValueRange> = HashMap::new();
    for n in 0..num {
        values.insert(
            n,
            search_values_updated::ValueRange {
                min: n as f64,
                max: (n * 100) as f64,
            },
        );
    }
    values
}

fn generate(target: Target) -> Vec<u8> {
    match target {
        Target::Full => prost::Message::encode_to_vec(&event::CallbackEvent {
            event: Some(Event::SearchValuesUpdated(
                callback_event::SearchValuesUpdated {
                    values: get_values(2),
                },
            )),
        }),
        Target::Values => prost::Message::encode_to_vec(&callback_event::SearchValuesUpdated {
            values: get_values(2),
        }),
        Target::Success => {
            let mut stat: HashMap<String, u64> = HashMap::new();
            stat.insert("a".to_owned(), 1);
            stat.insert("b".to_owned(), 2);
            stat.insert("c".to_owned(), 3);
            prost::Message::encode_to_vec(&event::CallbackEvent {
                event: Some(Event::SearchUpdated(event::callback_event::SearchUpdated {
                    found: 10,
                    stat,
                })),
            })
        }
    }
}

#[derive(Debug, Serialize, Default)]
struct Output {
    events: HashMap<String, Vec<u8>>,
}

fn main() {
    let mut output = Output::default();
    output
        .events
        .insert("full".to_owned(), generate(Target::Full));
    output
        .events
        .insert("values".to_owned(), generate(Target::Values));
    output
        .events
        .insert("success".to_owned(), generate(Target::Success));
    println!(
        "{}",
        serde_json::to_string(&output).expect("Message has to be serialized")
    )
}
