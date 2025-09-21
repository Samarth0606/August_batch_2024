
// let arr = [10,20,30,40,50,60,70];

// forEach = HOF that accepts a cb fn with 2 arguments and it doesnot returns anything

// arr.forEach()
// arr.forEach( function(){} )  
// let retuendArr= arr.forEach( function(item, index){
//                     console.log(item , index); // only for purpose od iteration
//                     // return item; // ❌
//                 } )  

// console.log(retuendArr);
                
// ---------------------------------------------------

// let arr = [10,20,30,40,50,60,70]; //older array = 7 elements

// map = HOF that accepts a cb fn with 2 arguments and it returns a new array (with same no of elements as of old array)
// arr.map()
// arr.map( function(){} )

// let returnedArr= arr.map( function(item,index){
//                     return item*item
//                 } )

// console.log(arr);
// console.log(returnedArr); //same no. of elements


// ---------------------------------------------------

let arr = [10,23,30,43,50,63,70]; //older array = 7 elements

// filter = HOF that accepts a cb fn with 2 arguments and it returns a new array (with no compulsion on no of elements)

let returnedArr =   arr.filter( function(item,index){
                        if(item%10 === 0){
                            return true
                        }
                    } )

console.log(arr);
console.log(returnedArr); //length is not fixed
                    