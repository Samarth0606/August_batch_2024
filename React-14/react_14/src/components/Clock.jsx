import React, { useEffect, useState } from 'react'

function Clock() {
    let [time,setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        let id = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return ()=> clearInterval(id)
    }, [])

  return (
    <div>
        Time: {time}
    </div>
  )
}

export default Clock