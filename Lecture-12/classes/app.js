
// constructor 
function Person(a,b,c,d){
    this.naam = a;
    this.umar = b;
    this.rang = c;
    this.isMale = d;
    this.greet = function(){ 
        console.log("Good Evening...");
    }
}
let p1 = new Person("Sam",11,"blue",true); 
let p2 = new Person("Kuldeep",22,"orange",true);
let p3 = new Person("Vanaja",21,"black",false); 
console.log(p1); console.log(p2); console.log(p3);










// ----------------------------------------------
// class (syntactical sugar)
class Person2{
    constructor(a,b,c,d){
        this.naam = a;
        this.umar = b;
        this.rang = c;
        this.isMale = d;
    }
    greet(){ 
        console.log("Good Evening...");
    }
}
let p4 = new Person2("Sam",11,"blue",true); 
let p5 = new Person2("Kuldeep",22,"orange",true);
let p6 = new Person2("Vanaja",21,"black",false); 
console.log(p4); console.log(p5); console.log(p6);
// p6.greet()


