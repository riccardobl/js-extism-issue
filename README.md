```bash
$ bash run.sh 

up to date, audited 2 packages in 460ms

found 0 vulnerabilities
(node:47057) ExperimentalWarning: WASI is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Send Hello from js 1 to host
Plugin call _PluginOutput [DataView] {
  byteLength: 1,
  byteOffset: 0,
  buffer: ArrayBuffer { [Uint8Contents]: <00>, byteLength: 1 }
}
Value received from plugin: 


!ERROR
Was expecting'Hello from js 1' but received ''


Execution out: _PluginOutput [DataView] {
  byteLength: 7,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <48 65 6c 6c 6f 20 30>,
    byteLength: 7
  }
}
```