
// function Person(x,y,z){
//     this.naam = x;
//     this.age = y;
//     this.favColor = z;
//     this.greet = function(){ console.log("I am greet") }
// }

// let p1 = new Person("Samarth" , 30 , "blue");
// console.log(p1);

// --------------------------------------------

// class Person{
//     constructor(x,y,z){
//         this.naam = x;
//         this.age = y;
//         this.favColor = z;
//     }
//     greet(){ console.log("I am greet") }
// }
// let p2 = new Person("Samarth" , 30 , "blue");
// console.log(p2);


// class Student{
//     constructor(x,y,z){
//         this.naam = x;
//         this.age = y;
//         this.favColor = z;
//     }
//     greet(){ console.log("I am greet") }
// }
// let p3 = new Student("Maverick" , 20 , "brown");
// console.log(p3);

// --------------------------------------------


// class Person{
//     constructor(x,y,z){
//         this.naam = x;
//         this.age = y;
//         this.favColor = z;
//     }
//     greet(){ console.log("I am greet") }
// }
// let p2 = new Person("Samarth" , 30 , "blue");
// console.log(p2);


// class Student extends Person{}

// let p3 = new Student("Maverick" , 20 , "brown");
// console.log(p3);


// --------------------------------------------


// class Person{
//     constructor(x,y,z){
//         this.naam = x;
//         this.age = y;
//         this.favColor = z;
//     }
//     greet(){ console.log("I am greet") }
// }
// let p2 = new Person("Samarth" , 30 , "blue");
// console.log(p2);


// class Student extends Person{
//     constructor(x,y,z,roll){
//         super(x,y,z)      // calls the constructor of the parent function
//         this.rollNo = roll;
//     }
// }

// let p3 = new Student("Maverick" , 20 , "brown", 420);
// console.log(p3);


// --------------------------------------------

// class Person{
//     constructor(x,y,z){
//         this.naam = x;
//         this.age = y;
//         this.favColor = z;
//     }
//     greet(){ console.log("I am greet") }
// }
// let p2 = new Person("Samarth" , 30 , "blue");
// console.log(p2);


// class Student extends Person{
//     constructor(x,y,z,roll){
//         super(x,y,z)      // cannot change the order
//         this.rollNo = roll;
//     }
// }

// let p3 = new Student("Maverick" , 20 , "brown", 420);
// console.log(p3);

// --------------------------------------------

// class Person{
//     constructor(x,y,z){
//         this.naam = x;
//         this.age = y;
//         this.favColor = z;
//     }
//     greet(){ console.log("I am greet") }
// }
// let p2 = new Person("Samarth" , 30 , "blue");
// console.log(p2);


// class Student extends Person{
//     constructor(x,y,z,roll){
//         super(x,y,z)     
//         this.rollNo = roll;
//     }
//     goodbye(){ console.log("tata sayonara...") }
// }

// let p3 = new Student("Maverick" , 20 , "brown", 420);
// console.log(p3);


// --------------------------------------------

class Person{
    constructor(x,y,z){
        this.naam = x;
        this.age = y;
        this.favColor = z;
    }
    greet(){ console.log("I am greet") }
}
let p2 = new Person("Samarth" , 30 , "blue");
console.log(p2);


class Student extends Person{
    constructor(x,y,z,roll){
        super(x,y,z)     
        this.rollNo = roll;
    }
    goodbye(){ console.log("tata sayonara...") }
    greet(){ console.log("I am student greet") }
}

let p3 = new Student("Maverick" , 20 , "brown", 420);
console.log(p3);