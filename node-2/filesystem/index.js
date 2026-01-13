// import fs from 'fs' //module
const fs = require('fs'); // commonjs

//CREATE
// fs.writeFileSync('sam.txt', "hey, welcome to @code_baithak")

fs.writeFile('mav.txt', "Welcome Mav", {flag:'w', encoding:'utf-8'}, (err,result)=>{
    if(err) throw err;
    else{
        console.log("file written successfully");  
    }
})

// READ
// const result = fs.readFileSync('sam.txt', 'utf-8')
const result = fs.readFileSync('sam.txt', {flag:'r', encoding: 'utf-8'})

// 2nd way
// const result = fs.readFileSync('sam.txt')
// console.log(result.toString());

fs.readFile('sam.txt', {encoding: 'utf-8'}, (err,data)=>{
    if(err) throw err;
    else{
        // console.log(data.toString());
        console.log(data);
    }
})

// UPDATE


// COPY


// DELETE