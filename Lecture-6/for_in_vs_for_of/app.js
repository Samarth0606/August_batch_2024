
// let arr = [10,20,30,40,50,60,70,80,90];


// for
// for(let i=0;i<6;i++){
    //     console.log(arr[i]);
    // }
    
    
    // for(let i=0; i<arr.length; i++){
    //     console.log(arr[i]);
    // }
        

// for-of
// let arr = [10,20,30,40,50,60,70,80,90];

// for(let item of arr){
//     console.log(item);
// }

// for(let i=0; i<arr.length; i=i+1){
//     console.log(arr[i]);
// }


// console.log(arr[99]); //undefined

// -----------------------------------------------------


// let obj = {
//     a: 10,
//     c: "bhai",
//     g: true,
//     abc: undefined,
//     lol: "samarth",
//     item: "vohra"
// }

// console.log(obj.lol);

// for(let item in obj){
//     console.log(item);                               //keys
//     // console.log(obj.item); // wrong
//     // console.log(obj['item']); // wrong
//     console.log(obj[item]); // right (array way)      //values
// }


// -----------------------------------------------------

let person = {
    name: "Samarth",
    age: 42,
    favColor: "blue",
    isMale: true,
    // x: "kisikisiyanidevi"
}

for(let x in person){
    console.log(x);                     //keys
    console.log(person.x);              //undefined   // wrong
    console.log(person['x']);           //undefined   // wrong
    console.log(person[x]);             //value
}


