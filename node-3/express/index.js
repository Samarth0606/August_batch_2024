const express = require('express');  // fn
const app = express();


// apis
// '/' == root route,  => req. & res. both are objects
app.get( '/'      , (req,res)=>{ res.send("welcome to root route") } );
// app.get( '/home'  , (req,res)=>{} );
// app.get( '/about' , (req,res)=>{} );

app.get('/sam' , (req,res)=>{
    res.send("hey i am get method of sam")
})

app.post('/sam' , (req,res)=>{
    res.send("hey i am post method of sam")
})


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER IS CONNECTED AT PORT: ${PORT}`);
})
