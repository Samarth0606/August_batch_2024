function Lucky(){
    let RN = Math.floor(Math.random()*10);
    return(
        <div>
            <h1>{RN}</h1>
            { RN === 7 ? <h1>WINNER</h1> : <h1>LOOSER</h1> }
        </div>
    )
}
export default Lucky;
// -----------------------------------------------
// function Lucky(){
//     let RN = Math.floor(Math.random()*10);
//     let el = null;
//     if(RN===7){
//         el = "Winner"
//     }else{
//         el = "looser"
//     }
//     return(
//         <div>
//             <h1>Lucky 7: {RN}</h1>
//             <h1>{el}</h1>
//         </div>
//     )
// }
// export default Lucky;