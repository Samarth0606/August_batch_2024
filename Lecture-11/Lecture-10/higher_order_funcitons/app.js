//HOF - 1
// function A(fn){                   //paramter
//     console.log("hi i am A");
//     fn();
// }

// function B(){
//     console.log("hi i am B");
// }
// // HOF - when A is accepting another fn as an argument i.e B in that case A is known as HOF
// A(B);      // B as an argument

// ----------------------------------------------

// HOF-2
//HOF
// function outer(){
//     console.log("I am outer");

//     function inner(){
//         console.log("I am inner");
//     }
//     return inner
// }

// let returnedVal = outer();

// -----------------------------------------------------------


//hof
function bigger(a){    //parameters
    console.log("i am bigger"); 
    // console.log(a);
    a();
}

//callback function
function smaller(){
    console.log("i am smaller");
}


// bigger( function(){console.log("hello")} );   //argument
bigger( smaller );   //argument




