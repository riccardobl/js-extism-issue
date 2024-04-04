```bash
$ node Test.js 
(node:11997) ExperimentalWarning: WASI is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
wasm://wasm/00708e96:1


RuntimeError: unreachable
    at wasm://wasm/00708e96:wasm-function[1152]:0xb7eb7
    at wasm://wasm/00708e96:wasm-function[1291]:0xcb584
    at wasm://wasm/00708e96:wasm-function[1293]:0xcb660
    at wasm://wasm/00708e96:wasm-function[1358]:0xd05e3
    at wasm://wasm/00708e96:wasm-function[1375]:0xd18e1
    at ForegroundPlugin.callBlock (file:///PROJ/DEV/openagents-extism-runtime/node_modules/@extism/extism/dist/esm/mod.js:965:7)
    at ForegroundPlugin.call (file:///PROJ/DEV/openagents-extism-runtime/node_modules/@extism/extism/dist/esm/mod.js:976:46)
    at main (file:///PROJ/DEV/openagents-extism-runtime/build/js/test/Test.js:18:38)

Node.js v18.17.1
```