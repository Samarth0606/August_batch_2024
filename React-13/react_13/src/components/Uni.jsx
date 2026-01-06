function Parent(){
    let data = "I am parent";
    function handleClick(data2){
        console.log(data2 , "data2");
    }
    return(
        <div>
            <Child handleClick={handleClick} data={data} />
        </div>
    )
}

function Child({data, handleClick}){
    // console.log(data , "child");
    let data2 = "secret"
    
    return(
        <h1 onClick={()=>handleClick(data2)}> Child: {data} </h1>
    )
}

export default Parent;