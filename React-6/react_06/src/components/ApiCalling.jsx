import { useEffect, useState } from "react"
import axios from 'axios'
function CallApi(){
    const [todos,setTodos] = useState([]);
    const API = "https://jsonplaceholder.typicode.com/todos"
    useEffect(()=>{
        axios.get(API)
        .then((resp)=>{ setTodos(resp.data) })
        .catch( (err)=>{console.log(err , "catch") })
        
    }, [])
    return(
        <div>
            <h1>ApiCalling</h1>
            {
                todos.map((item)=>{
                    return(
                        <div>
                            <h1>{item.title} - {item.id} </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CallApi;


// --------------------------------------------------------------------------

// import { useEffect, useState } from "react"
// import axios from 'axios'
// function CallApi(){
//     const [todos,setTodos] = useState([]);
//     const API = "https://jsonplaceholder.typicode.com/todos"
//     useEffect(()=>{
//         async function apiCall(){
//             let resp = await axios.get(API)
//             // console.log(resp.data);
//             setTodos(resp.data)
//         }
//         apiCall()
//     }, [])
//     return(
//         <div>
//             <h1>ApiCalling</h1>
//             {
//                 todos.map((item)=>{
//                     return(
//                         <div>
//                             <h1>{item.title} - {item.id} </h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default CallApi;



// --------------------------------------------------------------------------

// ---------------------------------------------------

// import { useEffect, useState } from "react"
// function CallApi(){
//     const [todos,setTodos] = useState([]);
//     const API = "https://jsonplaceholder.typicode.com/todos"
//     useEffect(()=>{
//         async function apiCall(){
//             let resp = await fetch(API);
//             let data = await resp.json()
//             setTodos(data)
//         }
//         apiCall()
//     }, [])
//     return(
//         <div>
//             <h1>ApiCalling</h1>
//             {
//                 todos.map((item)=>{
//                     return(
//                         <div>
//                             <h1>{item.title} - {item.id} </h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default CallApi;



// // --------------------------------------------------------------------------

// import { useEffect, useState } from "react"
// function CallApi(){
//     const [todos,setTodos] = useState([]);
//     const API = "https://jsonplaceholder.typicode.com/todos"
//     useEffect(()=>{
//         fetch(API)
//         .then((data)=>{ return data.json() })
//         .then((resp)=>{ setTodos(resp) })
//         .catch((err)=>{ console.log(err , "catch") })
//     }, [])
//     return(
//         <div>
//             <h1>ApiCalling</h1>
//             {
//                 todos.map((item)=>{
//                     return(
//                         <div>
//                             <h1>{item.title} - {item.id} </h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default CallApi;