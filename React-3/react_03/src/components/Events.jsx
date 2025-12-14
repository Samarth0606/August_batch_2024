function Events(){
    function handlePush(x,y){ console.log("balle 1", x, y) }
    function handleSam(){ console.log("balle 2") }
    
    return(
        <div>
            <button onClick={ ()=>handlePush(10,20) } >Push!!</button>
            <button onClick={ handleSam } >Push 2!!</button>
        </div>
    )
}

export default Events;

// ----------------------------------------------

// function Events(){
//     function handleClick1(){
//         console.log("click 1");
//     }
//     function handleClick2(){
//         console.log("click 2"); 
//     }

//     return(
//         <div>
//             <button onClick={handleClick1}> Click me 1! </button>
//             <h1 onClick={handleClick2}> Click me 2! </h1>
//         </div>
//     )
// }

// export default Events;