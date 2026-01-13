// const fs = require('fs');

// console.log(1);
// let result = fs.readFileSync('./sam.txt', 'utf-8') //blocking
// console.log(result);
// console.log(2);

// ----------------------------------

const fs = require('fs');

console.log(1);
fs.readFile('./sam.txt', 'utf-8', (err,result)=>{ //non-blocking
    if(err) throw err;
    else{
        console.log(result);
    }
}) 
console.log(2);
console.log(3);
console.log(4);