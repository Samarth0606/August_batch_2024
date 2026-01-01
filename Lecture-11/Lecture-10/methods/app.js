function sam(){
    console.log("i am sam");
}
sam();


// ----------------------------


//methods (functions inside object)
let obj = {
    a: 10,
    fn: function(){
        console.log("i am inside object");
    }
}

obj.fn()

