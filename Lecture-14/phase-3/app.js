

// setTimeout()
// setTimeout(cb,delay)

// setTimeout( function(){} , 4000)
// setTimeout( ()=>{
//     console.log("hello");
// } , 4000)


// ---------------------------------

// setInterval()
// setInterval(cb,gap)

// setInterval(function(){},2000)

let idd = setInterval( ()=>{
    console.log("Hello maverick boi");
}, 2000 )


setTimeout( ()=>{
    clearInterval(idd) //destroyed
} , 30000)



