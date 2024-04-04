
import * as Extism from "@extism/extism";
async function main() {
    const plugin = Extism.createPlugin("./plugin/plugin.wasm", {
        useWasi: true,

        functions: {
            env: {
                Test_success(cp, offs) {
                    const value = cp.read(offs).text();
                    console.log(value);
                    return offs;
                }
            }
        },
    });
    const res = await (await plugin).call("run", "{}");
    console.log(res);
}
main();
