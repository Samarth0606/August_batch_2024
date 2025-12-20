import { useState } from "react";

// CORRECT APPROACH
function Anything({naam}){
    const [username,setUsername] = useState(naam);
    function handleName(){
        setUsername("Anonymous")
        // console.log(naam , "naam"); //prop are immutable
    }
    return(
        <div>
            <h1>Name: {username}</h1>
            <button onClick={handleName} >Logout</button>
        </div>
    )
}

export default Anything;


// ----------------------------------------------------
// NOT THE CORRECT APPRAOCH

// function Anything({naam}){
//     function handleName(){
//         console.log(naam , "before");
//         naam = "Anonymous"
//         console.log(naam , "after");
//     }
//     return(
//         <div>
//             <h1>Name: {naam}</h1>
//             <button onClick={handleName} >Logout</button>
//         </div>
//     )
// }

// export default Anything;