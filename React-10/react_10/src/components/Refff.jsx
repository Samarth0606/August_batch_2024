import { useRef, useState } from "react";

function Refff(){
    const [count,setCount] = useState(0);

    const countRef = useRef(0);
    // console.log(countRef.current,  "countRef");
    function handleRef(){
        countRef.current++
    }

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Inc - {count}</button>
            <br /><br />
            <button onClick={handleRef} >Inc ref - {countRef.current}</button>
        </div>
    )
}

export default Refff;