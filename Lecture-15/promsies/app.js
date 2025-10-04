// constructor fn
// let p1 = new Promise( function(resolve,reject){

// } )

// -------------------------------------------------------


// let p2 = new Promise( function(resolve,reject){
//     let data = "Samarth Vohra 06060606"
//     let error = "I will not share password"
//     resolve(data) // .then fn
//     // reject(error) // .catch fn
// } )
// console.log(p2);

// p2
// .then( function(resp){ console.log(resp , "then") } )
// .catch( function(err){ console.log(err , "catch") } )


// -------------------------------------------------------


let o1 = new Promise( function(resolve,reject){
    // resolve("Login successful")
    reject("Login failed")
} )

o1
.then( function(res){ console.log(res , "then") } )
.catch( function(err){ console.log(err, "catch") } )


// ------------------------------------------------------