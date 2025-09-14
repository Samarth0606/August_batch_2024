// let person = {
//     // properties = key : value
//     name: "Samarth" , 
//     age: 10,
//     favColor: "Blue",
//     isMale: true
// }
// //array way
// // console.log( person[favColor] ); // ❌ always are stored as string
// console.log( person["favColor"] );  // ✅

// // dot notation
// console.log( person.favColor );

// --------------------------------------------
// loop there will be problem
// --------------------------------------------

// ----------------------------------------------------------------------------


let abc = {
    x: 100
}

let sam = abc.x

console.log(abc.x , "before changing");
console.log(sam , "before changing");

abc.x = true;
sam = abc.x;

abc.x = "hello";

console.log(abc.x , "after changing");
console.log(sam , "after changing");



