
// function samarth(){
//     console.log("helloss");
// }
// samarth()
// samarth()
// samarth()
// samarth()
// samarth()

// ------------------------

// function samarth(){
//     console.log("helloss");
//     // return undefined;
//     // return {a:10, b:20, c:30}
// }

// let returnedVal = samarth() // here we will get the returned value
// console.log(returnedVal);

// console.log( samarth() );

// ------------------------


// function sum(a, b, c){ //parameter
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return a+b+c
// }

// // we get the returned value at the point where we have called the function
// console.log( sum(10,20,30) ); //argument



// ------------------------


// function sum(a, b, c){  //c = undefined
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return a+b+c          //NaN
// }

// console.log( sum(10,20) ); 

// ------------------------

function sum(a, b=200, c=100){ //default
    console.log(a);
    console.log(b);
    console.log(c);
    return a+b+c
}

console.log( sum(10,20) ); //arguments ✅



