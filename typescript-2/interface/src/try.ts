// let a = 100;
// console.log(a);

// ------------------------------
// function isLegal(user:{
//     firstName: string,
//     lastName: string,
//     favColor: string,
//     age: number
// }){
//     return user.age>18 ? true : false;
// }
// isLegal({
//     firstName: "Sam",
//     lastName: "Vohra",
//     favColor: "blue",
//     age:20
// })

// ------------------------------

// interface => DRY + type of object

interface User{
    firstName: string,
    lastName: string,
    favColor?: string, //optional parameter
    age: number
}

function isLegal(user : User){
    return user.age>18 ? true : false;
}
isLegal({
    firstName: "Sam",
    lastName: "Vohra",
    favColor: "blue",
    age:20
})
isLegal({
    firstName: "Samarth",
    lastName: "Vohra ji",
    age:40
})