


function samarth(){
    var a = 10;
    var b = 20;
    let c = 30;
    const d = 40;

    function inner(){
        console.log(a);
        console.log(b);
    }
    return inner
}
let ret = samarth()
// console.log(ret);
ret();

