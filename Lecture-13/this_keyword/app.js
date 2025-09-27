
// 1. direct function calling

// function samarth(){
//     console.log(this);
// }
// samarth(); //in the case of direct fn calling,this depends on `window object`

//window is the global object which is created when a GEC is created

// -------------------------------------------------------------

// 2. object calling

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); //points to  the object inside which method is available
//     }
// }

// obj.fn();

// -------------------------------------------------------------
// this keyword is never fixed it is always dependant on the `how u call it`

// let obj = {
//     a: 100,
//     fun: function(){
//         console.log(this , "1"); // obj
//         function lolipop(){
//             console.log(this , "2"); // window
//         }
//         lolipop()  //direct method - 
//     }
// }


// obj.fun()
 
// -------------------------------------------------------------

// let obj = {
//     bhai: 10,
//     fun: function(){
//         console.log(this , "1"); // window
//         function lolipop(){
//             console.log(this , "2"); // window
//             function boy(){
//                 console.log(this , "3"); // window
//             }
//             boy() // direct calling
//         }
//         lolipop()  // direct calling
//     }
// }

// obj.fun() //object calling

// ------

// let bro = obj.fun
// bro() // direct calling


// -------------------------------------------------------------
// 3. constructor fn -> this points to the newly created object

// function Sam(){
//     this.a = 10;
//     this.b = "sam"
// }

// let s1 = new Sam();
// let s2 = new Sam();

// -------------------------------------------------------------
// 4. indirect calling (HW -> next Classs)
// call, apply, bind         (homework-> pre recorded content)


// -------------------------------------------------------------
// 5. arrow function fn -> this keyword depends on parent's this

// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this);  // window  //same as obj's this
//     }
// }

// obj.fn()

// ------------

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // obj
//         let abc = ()=>{
//             console.log(this , "2"); // obj
//         }
//         abc()
//     }
// }
// obj.fn()

// ------------

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // window
//         let abc = ()=>{
//             console.log(this , "2"); // window
//         }
//         abc()
//     }
// }
// let abcd = obj.fn
// abcd()

// ------------

// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this , "1"); // window
//         let abc = ()=>{
//             console.log(this , "2"); // window
//         }
//         abc()
//     }
// }
// obj.fn()
