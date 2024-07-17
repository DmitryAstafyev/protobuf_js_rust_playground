import * as pro from "protocol";
import { spawnSync } from "child_process";
import { join } from "path";
import { exit } from "process";

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
        if (key === Target.full) {
            console.log(`Bytes: [${data.events[key]}]`);
            let msg = pro.decode(Uint8Array.from(data.events[key]));
            console.log(`JS Decoded (${key}): ${JSON.stringify(msg)}`);
            console.log(
                `JS Decoded (${key}): ${JSON.stringify(
                    msg.SearchValuesUpdated
                )}`
            );
        }
    });
}
// selfDiagnostic();
decodeIncome(join(process.cwd(), "../rs/target/release/protobuf_test"));

function test() {
    const objRef: any = pro.get_wasm_bindgen();
    const obj = {
        a: objRef.a,
        b: objRef.b,
        c: objRef.c,
        d: objRef.d,
    };
    console.log(`obj ref:`);
    console.log(objRef);
    console.log(`get_wasm_bindgen: ${JSON.stringify(obj)}`);
    console.log(
        `get_serde_wasm_bindgen: ${JSON.stringify(
            pro.get_serde_wasm_bindgen()
        )}`
    );
}

test();
