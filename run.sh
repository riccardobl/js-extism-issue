#!/bin/bash
set -e
bash setup-extism.sh
npm i 
export PATH="$PATH:$PWD/tmp/binaryen/bin:$PWD/tmp/extismjs/bin" 
export extismjs="$PWD/tmp/extismjs/bin/extism-js"
cd plugin
RUST_BACKTRACE=1 $extismjs ./index.js -i ./index.d.ts -o ./plugin.wasm
cd ..
node --experimental-wasi-unstable-preview1 --experimental-specifier-resolution=node  Test.js



