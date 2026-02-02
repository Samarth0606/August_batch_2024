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
// let arr = [10,20,30,50,40,60,25];
// function maxi(arr: number[]){
//     let max = 0;
//     for(let item of arr){
//         if(item>=max){
//             max = item
//         }
//     }
//     return max;
// }
// console.log( maxi(arr) );
// -------------------------------------
// array object
// let users = [{name:"sam" , age:21}]
// interface User{
//     name: string , 
//     age: number
// }
// function isLegal(users: User[]){
//     for(let item of users){
//         if(item.age > 18){
//             return true
//         }else{
//             return false
//         }
//     }
// }
// isLegal(users)
// ---------------------------
// type X = {
//     name:string,
//     age:number,
// }
// type Y  =  X & {
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
// ---------------------------------------
// enums(enumerations)
// function doSomething(keyPressed:string){
//     if(keyPressed == "up"){ console.log("UP") }
//     else if(keyPressed == "down"){ console.log("DOWN") }
// }
// doSomething("up")
// doSomething("down")
// doSomething("chandigarh")
// ---------------------------------------
// type Key = "up"|"down"|"right"|"left"
// function doSomething(keyPressed:Key){
//     if(keyPressed == "up"){ console.log("UP") }
//     else if(keyPressed == "down"){ console.log("DOWN") }
// }
// doSomething("up")
// doSomething("down")
// doSomething("chandigarh")
// ---------------------------------------
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.up) {
        console.log("UP");
    }
    else if (keyPressed == Direction.down) {
        console.log("DOWN");
    }
}
console.log(Direction.up);
console.log(Direction.down);
console.log(Direction.left);
