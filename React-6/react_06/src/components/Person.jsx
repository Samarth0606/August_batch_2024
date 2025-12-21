import React, { useState } from 'react'

function Person() {
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1)
        setCount(count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+2) 
        setCount((count)=>count+1)
    }

  return (
    <div>
        <h1>Count- {count}</h1>
        <button onClick={handleClick}>Inc +</button>
    </div>
  )
}

export default Person