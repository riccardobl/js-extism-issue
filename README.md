```bash
$ node Test.js 
(node:193781) ExperimentalWarning: WASI is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///PROJ/DEV/openagents-extism-runtime/node_modules/@extism/extism/dist/esm/mod.js:1031
      const instance = await WebAssembly.instantiate(module, imports);
                                         ^

TypeError: WebAssembly.instantiate(): Import #33 module="extism:host/user" error: module is not an object or function
    at file:///PROJ/DEV/openagents-extism-runtime/node_modules/@extism/extism/dist/esm/mod.js:1031:42
    at Array.map (<anonymous>)
    at createForegroundPlugin (file:///PROJ/DEV/openagents-extism-runtime/node_modules/@extism/extism/dist/esm/mod.js:1030:13)
    at async main (file:///PROJ/DEV/openagents-extism-runtime/build/js/test/Test.js:17:24)

Node.js v18.17.1
```