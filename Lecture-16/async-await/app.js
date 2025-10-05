

// function samarth(){

// }
// console.log( samarth() ); //undefined

// --------------------------------------

// function samarth(){

// }
// console.log( new samarth() ); // {}


// --------------------------------------


// async function samarth(){
//     return [100,200];
// }
// console.log( samarth() ); // promise


// --------------------------------------

// NO - the promise will be overrided

// async function samarth(){
//     return new Promise(function(resolve,reject){reject("goo away")})
// }
// console.log( samarth() ); 

// --------------------------------------



// await - wait till the promise is either resolved or rejected

// await cannot be used without async


// async function sam(){
//     let val = await fetch('http://google.com') // Api calling

// }


// --------------------------------------

// async function sam1(){
//     console.log(10);
//     console.log(20);
//     let res = await fetch('https://api.tvmaze.com/search/shows?q=girls')
//     console.log(res);
//     console.log(30);
// }
// sam1()
// console.log("sam done");


// --------------------------------------

// async function sam1(){
//     console.log(10);
//     console.log(20);
//     let res = await fetch(' https://api.tvmaze.com/search/shows?q=girls')
//     console.log(res);
//     console.log(30);
// }
// sam1()

// --------------------------------------

async function sam1(){
    console.log(10);
    console.log(20);
    let res = await fetch('https://api.tvmaze.com/search/shows?q=girls')
    console.log(res , "1st");
    console.log(30);
}
sam1()
console.log("sam done");

async function vohra(){
    console.log(100);
    console.log(200);
    let res = await fetch('https://api.tvmaze.com/search/shows?q=girls')
    console.log(res , "2nd");
    console.log(300);
}
vohra()
console.log("vohra done");

// 10 20 sam done 100 200 vohra done  1st 30 2nd 300