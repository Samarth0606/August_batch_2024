import React, { memo, useCallback, useState } from 'react'

function UseCallback() {
    const [count,setCount] = useState(0);
    // let a = 1;
    // let a = function(){console.log("hey")}
    let a = useCallback( function(){console.log("hey")}, [])
  return (
    <div>
        <Chotu prop={a} />
        <button onClick={()=>setCount(count+1)} >Count - {count}</button>
    </div>
  )
}

export default UseCallback

// becoz props were same
const Chotu = memo(function({prop}){
    return(
        <h1>Hello from - {prop()}</h1>
    )
})

// function Chotu({prop}){
//     return(
//         <h1>Hello from - {prop}</h1>
//     )
// }