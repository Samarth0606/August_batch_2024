// const API = "https://jsonplaceholder.typicode.com/todos";


// fetch with promise

//return a promise
// fetch(API)
// .then( (resp)=>{ return resp.json() } )
// .then( (data)=>{ console.log(data , "entire data") } )
// .catch( (err)=>{ console.log(err , "catch") } )


// ------------------------------------------------


// fetch with async await

// async function calling(){
//     let resp = await fetch(API);
//     let data = await resp.json()
//     console.log(data , "resp");
// }
// calling()


// ------------------------------------------------

const API = "https://jsonplaceholder.typicode.com/todos";

// axios with promise

//promise returns
// axios.get(API)
// .then((resp)=>{ console.log(resp.data , "then") })
// .catch((err)=>{ console.log(err , "catch") })

// ------------------------------------------------

// axios with async await
let resp = null;
async function calling(){
    resp = await axios.get(API);
    console.log(resp.data , "data");

    for(let item of resp.data){
        console.log(item.id);
        console.log(item.title);
        console.log(item.completed);
    }
}
calling()

// console.log(resp);


// Selection

// manipulation
// h2.innerHTML = item.title
// h1.innerHTML = item.completed



