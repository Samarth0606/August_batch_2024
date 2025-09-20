
// console.log(a);
// var a = 10;
// console.log(a);

// function sam(){
//     console.log(b);
//     let b = 20;
//     console.log(b);  
// }
// sam();

// ---------------------

// var a = 10;
// let b = 20;
// function vohra(){
//     var c =  100;
//     const d = true;
// }
// vohra()

// ---------------------


// var a = 10;      // no -> var   -> global -> undefined
// let b = 100;     // no -> let   -> script -> value unavailable
// const c = 1000;  // no -> const -> script -> value unavailable

// if(true){
//     var d = true;    // yes -> no -> var   -> global
//     let e = false;   // yes -> no -> let   -> block 
//     const f = "lol"  // yes -> no -> const -> block
// }

// function boy(){
//     var g = 1;     // yes -> yes -> var   -> functional
//     let h = 2;     // yes -> yes -> let   -> block
//     const i = 3;   // yes -> yes -> const -> block  
// }
// boy()

// ------------------------------------


// console.log(a); //undefined
// var a = 10;     //  global
// let b = 20;     //  script
// console.log(a); // 10
// console.log(b); // 20

// function sam(){
//     console.log(a); // undefined
//     var a = 1000;   // functional
//     console.log(a); // 1000
//     let b = 2000;   // block
//     console.log(b); // 2000
// }
// sam();
// console.log(a);  // 10
// console.log(b);  // 20

// ------------------------------------

// console.log(a); // undefined
// var a = 10;     // global
// const b = 20;   // script
// console.log(a); // 10
// console.log(b); // 20
// const c = 30;   // script
// console.log(c); // 30

// function sam(){
//     console.log(a); // undefined
//     var a = 1000;   // functional
//     console.log(a); // 1000 
//     let b = 2000;   // block
//     console.log(b); // 2000
//     const c = 3000; // block
//     console.log(c); // 3000
// }

// console.log(c);  // 30
// sam();
// console.log(c);  // 30
// console.log(a);  // 10
// console.log(b);  // 20

// // ------------------------------------

// console.log(a); // undefined
// var a = 10;     // global
// let b = 20;     // script
// console.log(a); // 10
// console.log(b); // 20
// const c = 30;   // script
// console.log(c); // 30

// function sam(){
//     console.log(a); // 10
//     console.log(b); // 20
//     console.log(c); // 30
// }

// console.log(c);  // 30
// sam()
// console.log(c);  // 30
// console.log(a);  // 10
// console.log(b);  // 20

// ------------------------------------

console.log(a); // undefined
var a = 10;     // global
let b = 20;     // script
console.log(a); // 10
console.log(b); // 20
const c = 30;   // script
console.log(c); // 30

if(true){
    console.log(a); // 10
    var a = 100     // global 
    console.log(a); // 100
    let b = 200;    // block
    console.log(b); // 200
    const c = 300;  // block
    console.log(c); // 300
}

console.log(a);  // 100
console.log(b);  // 20
console.log(c);  // 30