
// function sam(){

// }

// let out = sam() //undefined
// console.log(out);


// -----------------------------
//role of constructor function is to create ```objects```
// -> always starts with new keyword
// -> (convention) => (good practice) === to start he constructor fn with a capital letter

// function sam(){

// }
// function Vohra(){ // no compulsion ❌

// }

// let out  = sam()       // undefined
// let out2 = new Vohra() // {}
// console.log(out);
// console.log(out2);

// -----------------------------

// let obj1 = {
//     a: 10,
//     b: 20,
//     c: 30,
//     fn: function(){
//         console.log("hello");
//     }
// }

// let obj2 = {
//     a: 100,
//     b: 200,
//     c: 300,
//     fn: function(){
//         console.log("hello");
//     }
// }

// let obj3 = {
//     a: 1000,
//     b: 2000,
//     c: 3000,
//     fn: function(){
//         console.log("hello");
//     }
// }

// --------------------------------------------
// constructor fn

function ObjectCreator(x,y,z){
    this.a = x;
    this.b = y;
    this.c = z;
    this.fn = function(){ console.log("hello") }
}
let o1 = new ObjectCreator(10,20,30)
let o2 = new ObjectCreator(100,200,300)
let o3 = new ObjectCreator(1000,2000,3000)

console.log(o1);
console.log(o2);
console.log(o3);
// o1.fn()
