import { useEffect, useState } from "react";

function Clock(){
    const [time,setTime] = useState(0);

    useEffect(()=>{
        let id = setInterval(()=>{
            setTime(time+1)
        }, 1000)
        return ()=>clearInterval(id) //cleanup fn
    } , [time])

    return(
        <div>
            <h1>Timer: {time} </h1>
        </div>
    )
}

export default Clock;