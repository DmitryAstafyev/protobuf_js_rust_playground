import { protocol as pro } from "protocol";
import { spawnSync } from "child_process";
import { join } from "path";
import { exit } from "process";

function getValues(num: number): {
    [key: string]: pro.CallbackEvent.SearchValuesUpdated.ValueRange;
} {
    const values: any = {};
    for (let i = 0; i < num; i += 1) {
        values[i.toString()] =
            new pro.CallbackEvent.SearchValuesUpdated.ValueRange({
                min: i,
                max: i * 100,
            });
    }
    return values;
}

function getFull(): pro.CallbackEvent {
    return new pro.CallbackEvent({
        searchValuesUpdated: new pro.CallbackEvent.SearchValuesUpdated({
            values: getValues(2),
        }),
    });
}
function getValuesEvent(): pro.CallbackEvent.SearchValuesUpdated {
    return new pro.CallbackEvent.SearchValuesUpdated({
        values: getValues(2),
    });
}
function getSearchUpdated(): pro.CallbackEvent {
    const stat: { [key: string]: number } = {};
    stat["a"] = 1;
    stat["b"] = 2;
    stat["c"] = 3;
    return new pro.CallbackEvent({
        searchUpdated: new pro.CallbackEvent.SearchUpdated({
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
                let msg = pro.CallbackEvent.decode(
                    Uint8Array.from(data.events[key])
                );
                console.log(`JS Decoded (${key}): ${JSON.stringify(msg)}`);
            } else if (key === Target.values) {
                let msg = pro.CallbackEvent.SearchValuesUpdated.decode(
                    Uint8Array.from(data.events[key])
                );
                console.log(`JS Decoded (${key}): ${JSON.stringify(msg)}`);
            } else if ((key = Target.success)) {
                let msg: pro.CallbackEvent = pro.CallbackEvent.decode(
                    Uint8Array.from(data.events[key])
                );
                console.log(`JS Decoded (${key}): success`);
                console.log(
                    `Bytes RS: ${JSON.stringify(data.events[key])} (len: ${
                        data.events[key].length
                    })`
                );
                let buf = pro.CallbackEvent.encode(getSearchUpdated()).finish();
                console.log(
                    `Bytes JS: ${JSON.stringify(Array.from(buf))} (len: ${
                        buf.length
                    })`
                );
                console.log(
                    `found: ${msg.searchUpdated!.found}, stat: ${JSON.stringify(
                        msg.searchUpdated!.stat
                    )}`
                );
            } else {
                console.error(`Unknown key: ${key}`);
                exit(1);
            }
        } catch (e) {
            console.error(`Fail to decode "${key}"`);
            console.error(e);
            if (key === Target.full) {
                let buf = pro.CallbackEvent.encode(getFull()).finish();
                console.log(
                    `Bytes RS: ${JSON.stringify(data.events[key])} (len: ${
                        data.events[key].length
                    })`
                );
                console.log(
                    `Bytes JS: ${JSON.stringify(buf)} (len: ${buf.length})`
                );
            } else if (key === Target.values) {
                // let buf = pro.CallbackEvent.encode(getValuesEvent()).finish();
                console.log(
                    `Bytes RS: ${JSON.stringify(data.events[key])} (len: ${
                        data.events[key].length
                    })`
                );
                // console.log(
                //     `Bytes JS: ${JSON.stringify(buf)} (len: ${buf.length})`
                // );
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
