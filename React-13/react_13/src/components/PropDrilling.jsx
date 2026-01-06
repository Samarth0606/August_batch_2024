import React, { useState } from 'react'

function PropDrilling() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <Count count={count} setCount={setCount} />
    </div>
  )
}
export default PropDrilling

function Count({count, setCount}){
    return( 
        <div>
            <h1>Count: {count}</h1> 
            <Button count={count} setCount={setCount} />
        </div>
    )
}

function Button({count, setCount}){
    function handleDec(){ setCount(count-1) }
    function handleInc(){ setCount(count+1) }
    return(
        <div>
            <button onClick={handleDec}>Dec</button>
            <button onClick={handleInc}>Inc</button>
        </div>
    )
}