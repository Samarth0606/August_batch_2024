import { useMemo, useState } from "react";

function UseMemoo(){
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);
    function handleInp(e){
        setInp(e.target.value)
    }
    let memoCount = useMemo(()=>{
        let ans = 0;
        for(let i=1;i<=inp;i++){
            console.log("loop ran");
            ans = ans+i
        }
        return ans
    }, [inp])

    return(
        <div>
            <button onClick={()=>setCount(count+1)} >Click - {count}</button>
            <h1>SUM:{memoCount}</h1>
            <input onChange={handleInp} type="number" value={inp} />
        </div>
    )
}

export default UseMemoo;

// task 1=> btn->click->count(State)->inc+1
// task 2=> inp->number type->1-num(sum)-> ans variable (1-199)
