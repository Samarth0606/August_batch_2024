import React, { useState } from 'react'

function Inputt() {
    const [inp,setInp] = useState("");
    function handleInp(e){
        setInp(e.target.value)
    }
  return (
    <div>
        <input onChange={()=>handleInp()} type="text" value={inp} />
    </div>
  )
}

export default Inputt