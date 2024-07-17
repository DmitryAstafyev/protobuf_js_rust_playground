import * as pro from "protocol";
import { spawnSync } from "child_process";
import { join } from "path";
import { exit } from "process";

function getValues(
    num: number
): Map<number, pro.event.CallbackEvent.SearchValuesUpdated.ValueRange> {
    const values = new Map();
    for (let i = 0; i < num; i += 1) {
        values.set(
            i,
            new pro.event.CallbackEvent.SearchValuesUpdated.ValueRange({
                min: i,
                max: i * 100,
            })
        );
    }
    return values;
}

function getFull(): pro.event.CallbackEvent {
    return new pro.event.CallbackEvent({
        search_values_updated: new pro.event.CallbackEvent.SearchValuesUpdated({
            values: getValues(2),
        }),
    });
}
function getValuesEvent(): pro.event.CallbackEvent.SearchValuesUpdated {
    return new pro.event.CallbackEvent.SearchValuesUpdated({
        values: getValues(2),
    });
}
function getSearchUpdated(): pro.event.CallbackEvent {
    const stat = new Map();
    stat.set("a", 1);
    stat.set("b", 2);
    stat.set("c", 3);
    return new pro.event.CallbackEvent({
        search_updated: new pro.event.CallbackEvent.SearchUpdated({
            found: 10,
            stat,
        }),
    });
}
enum Target {
    full = "full",
    values = "values",
    success = "success",
}
function decodeIncome(path: string) {
    const data: {
        events: {
            [key: string]: number[];
        };
    } = JSON.parse(spawnSync(path).stdout.toString());
    if (!data.events) {
        console.error(`Fail to get data from rs`);
        return exit(1);
    }
    Object.keys(data.events).forEach((key: string) => {
        console.log(`${"=".repeat(50)}${key}${"=".repeat(50)}`);
        try {
            if (key === Target.full) {
                let msg = pro.event.CallbackEvent.deserialize(
                    Uint8Array.from(data.events[key])
                );
                console.log(`JS Decoded (${key}): ${JSON.stringify(msg)}`);
            } else if (key === Target.values) {
                let msg =
                    pro.event.CallbackEvent.SearchValuesUpdated.deserialize(
                        Uint8Array.from(data.events[key])
                    );
                console.log(`JS Decoded (${key}): ${JSON.stringify(msg)}`);
            } else if ((key = Target.success)) {
                let msg: pro.event.CallbackEvent =
                    pro.event.CallbackEvent.deserialize(
                        Uint8Array.from(data.events[key])
                    );
                console.log(`JS Decoded (${key}): success`);
                let gen = getSearchUpdated();
                console.log(
                    `Bytes RS: ${JSON.stringify(data.events[key])} (len: ${
                        data.events[key].length
                    })`
                );
                console.log(
                    `Bytes JS: ${JSON.stringify(
                        Array.from(gen.serialize())
                    )} (len: ${gen.serialize().length})`
                );
                console.log(
                    `found: ${msg.search_updated.found}, stat: ${Array.from(
                        msg.search_updated.stat.entries()
                    )
                        .map((v) => `${v[0]}: ${v[1]}`)
                        .join(", ")}`
                );
            } else {
                console.error(`Unknown key: ${key}`);
                exit(1);
            }
        } catch (e) {
            console.error(`Fail to decode "${key}"`);
            console.error(e);
            if (key === Target.full) {
                const gen = Array.from(getFull().serialize());
                console.log(
                    `Bytes RS: ${JSON.stringify(data.events[key])} (len: ${
                        data.events[key].length
                    })`
                );
                console.log(
                    `Bytes JS: ${JSON.stringify(gen)} (len: ${gen.length})`
                );
                console.log(
                    `Bytes JS: ${JSON.stringify(
                        Array.from(getFull().serializeBinary())
                    )}`
                );
            } else if (key === Target.values) {
                const gen = Array.from(getValuesEvent().serialize());
                console.log(
                    `Bytes RS: ${JSON.stringify(data.events[key])} (len: ${
                        data.events[key].length
                    })`
                );
                console.log(
                    `Bytes JS: ${JSON.stringify(gen)} (len: ${gen.length})`
                );
                console.log(
                    `Bytes JS: ${JSON.stringify(
                        Array.from(getValuesEvent().serializeBinary())
                    )}`
                );
            } else {
                console.error(`Unknown key: ${key}`);
                exit(1);
            }
            // exit(1);
        }
    });
}
// selfDiagnostic();
decodeIncome(join(process.cwd(), "../rs/target/release/protobuf_test"));
