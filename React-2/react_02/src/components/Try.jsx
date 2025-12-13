function Try(){
// 1st world
    let x = "samarth"
    let y = 500
    let z = true;
    let w = false;
    let u = null;
    let v = "undefined";
   
// 2nd world
    return(
        <div>
            <h1>X: {x} </h1>
            <h1>Y: {y} </h1>
            <h1>Z: { JSON.stringify(z) } </h1>
            <h1>W: { JSON.stringify(w) } </h1>
            <h1>U: { JSON.stringify(u) } </h1>
            {/* <h1>V: { JSON.stringify(v) } </h1> */}
            <h1>V: {v} </h1>
        </div>
    )
}

export default Try;

// ---------------------------------------------

// function Try(){
// // 1st world
//     let abc = 10;
//     let x = "samarth"
//     let y = 500
//     console.log("balle balle" , "1");
    
//     // 2nd world
//     return(
//         <div>
//             <h1> abc = {abc} </h1>
//             <h1>X: {x} </h1>
//             <h1>Y: {y} </h1>
//         </div>
//     )
// }

// export default Try;