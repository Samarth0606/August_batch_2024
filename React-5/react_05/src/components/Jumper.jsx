import { useState } from "react";

function Jumper(){
    const [count,setCount] = useState(0)
    function handleInc(){
        setCount( count+2 )          // 2
        setCount( count+1 )          // 1 
        setCount( (count)=>count+1 ) // 1+1 = 2
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleInc} >Inc +</button>
        </div>
    )
}

export default Jumper;


// ----------------------------------------------

// import { useState } from "react";

// function Jumper(){
//     const [count,setCount] = useState(0)
//     function handleInc(){
//         setCount( (cnt)=>cnt+1 ) // 0 + 1 = 1
//         setCount( (sam)=>sam+1 ) // 1 + 1 = 2
//         setCount( (mav)=>mav+1 ) // 2 + 1 = 3
//     }
//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={handleInc} >Inc +</button>
//         </div>
//     )
// }

// export default Jumper;

// ----------------------------------------
// import { useState } from "react";

// function Jumper(){
//     const [count,setCount] = useState(0)
//     // const [user,setUser] = useState("sam")

//     function handleInc(){
//         setCount(count+1)
//         setCount(count+1)
//         setCount(count+1)
//         // setUser("anonymous")
//         //only 1 rerender => batching
//     }

//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={handleInc} >Inc +</button>
//         </div>
//     )
// }

// export default Jumper;