import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

function PropDrilling() { // A
    const [count,setCount] = useState(0);
  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount} />
        </CountContext.Provider>
    </div>
  )
}
export default PropDrilling

function Count({setCount}){ //B (free from these state)
    return( 
        <div>
            <CountRenderer />
            <Button setCount={setCount} />
        </div>
    )
}

function CountRenderer(){ //C (need here)
    let count = useContext(CountContext)
    return( <h1>Count: {count}</h1> )
}

function Button({setCount}){ //D
    let count = useContext(CountContext)
    function handleDec(){ setCount(count-1) }
    function handleInc(){ setCount(count+1) }
    return(
        <div>
            <button onClick={handleDec}>Dec</button>
            <button onClick={handleInc}>Inc</button>
        </div>
    )
}
