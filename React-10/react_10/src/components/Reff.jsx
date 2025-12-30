import { useEffect, useRef } from "react";

function Reff(){

    let salary = 200000;
    let spanEl = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            // console.log(spanEl.current , "spanEl");
            spanEl.current.innerHTML = "200"
        }, 3000)
    }, [])

    return(
        <div>
            <h1>Salary is: <span ref={spanEl}> {salary} </span> </h1>
        </div>
    )
}

export default Reff;

// -------------------------------------------

// import { useEffect } from "react";

// function Reff(){

//     let salary = 200000;

//     useEffect(()=>{
//         setTimeout(()=>{
//             document.getElementById('salar').innerHTML = "200" //DOM
//         }, 3000)
//     }, [])

//     return(
//         <div>
//             <h1>Salary is: <span id="salar"> {salary} </span></h1>
//         </div>
//     )
// }

// export default Reff;