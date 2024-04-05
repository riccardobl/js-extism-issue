const { Test_success } = Host.getFunctions()
function run(){
    let msg = "Hello from js 1";
    console.log("Send "+msg+" to host");
    let mem = Memory.fromString(msg);
    let offset = Test_success(mem.offset);   
    Host.outputString(`Hello ${offset}`)

}

module.exports = {run}