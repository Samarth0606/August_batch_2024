"use strict";
// console.log("hello");
// // ---------------------------
// interface Person{
//     name:string,
//     age:number,
//     greet(phrase:string): void
// }
// class Student implements Person{
//     name:string;
//     age:number;
//     constructor(n:string, a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name}`);
//     }
// }
// let newStudent = new Student("Samarth" , 12)
// let newStudent2 = new Student("Maverick" , 21)
// ---------------------------
// interface X{
//     name:string,
//     age:number,
// }
// interface Y extends X{
//     greet(phrase:string): void
// }
// class Student implements Y{
//     name:string;
//     age:number;
//     constructor(n:string, a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name}`);
//     }
// }
// let newStudent = new Student("Samarth" , 12)
// let newStudent2 = new Student("Maverick" , 21)
// ---------------------------
// types
// unions
// type Id = number | string | boolean;
// function sam(id: Id){
//     console.log(id);
// }
// sam(1)
// sam("1")
// sam(true)
// intersection
// type DSA = {
//     teach: string ,
//     leetcode: number
// }
// type WEB = {
//     teach: string,
//     project: number
// }
// type Samarth = DSA & WEB;
// const sam:Samarth = {
//     teach: "Samarth Vohra",
//     leetcode: 308,
//     project: 41
// }
// interface = classes
// type is as same as interface => can we use type with classes?
// -------------------------------------
let arr = [10, 20, 30, 50, 40, 60, 25];
function maxi(arr) {
    let max = 0;
    for (let item of arr) {
        if (item >= max) {
            max = item;
        }
    }
    return max;
}
console.log(maxi(arr));
