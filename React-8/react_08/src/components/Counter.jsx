// class based component
// import React from "react";
// export class Counter extends React.Component{
//     componentDidUpdate(prevProp,prevState){
//         if(this.props.count !== prevProp.count){
//             console.log("i am updated");
//         }
//     }

//     render(){
//         return(
//             <h1>Count: {this.props.count} </h1>
//         )
//     }
// }

// ----------------------------------------------
// functional component
import { useEffect, useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        if(count===0){
            console.log("Component did mount");
        }
        else if(count>0 && count<=5){
            console.log("Component did update");
        }
        else if(count>5){
            return ()=>{ console.log("Component will unmount") }
        }
    }, [count])

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Inc</button>
        </div>
    )
}

export default Counter;
