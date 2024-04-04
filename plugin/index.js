
function run(){
    let msg = "Hello from js 1";
    let mem = Memory.fromString(msg);
    let offset = Test_success(mem.offset);   
    Host.outputString(`Hello ${offset}`)

}