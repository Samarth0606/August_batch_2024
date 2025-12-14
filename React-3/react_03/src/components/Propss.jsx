function Propss( {naam, age, isMale} ){
    return(
        <div>
            <h1> {naam} </h1>
            <h1> {age} </h1>
            <h1> {JSON.stringify(isMale)} </h1>
        </div>
    )
}

export default Propss;

// ------------------------------------------

// function Propss(props){
//     console.log(props , "props"); //object
    
//     return(
//         <div>
//             <h1> {props.naam} </h1>
//             <h1> {props.age} </h1>
//         </div>
//     )
// }

// export default Propss;