

import * as Extism from "@extism/extism";
async function main() {
    const plugin = Extism.createPlugin("./plugin/plugin.wasm", {
        useWasi: true,
        functions: {
            "extism:host/user": {
                Test_success(cp, offs) {
                    const pluginOut = cp.read(offs);
                    const value = pluginOut.text();
                    console.log("Plugin call",pluginOut);
                    console.log(`Value received from plugin: ${value}`);
                    const expecting = "Hello from js 1";
                    if (expecting!=value)console.error(`\n\n!ERROR\nWas expecting'${expecting}' but received '${value}'\n\n`);
                    return offs;
                }
            }
        },
    });
    const res = await (await plugin).call("run");
    console.log("Execution out:",res);
}
main();
