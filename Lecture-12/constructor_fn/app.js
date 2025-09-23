

// function sam(){

// }

// console.log( sam() ); //undefined

// -----------------------------

//constructor calling -> create objects
// function sam(){

// }

// console.log( new sam() ); // {}


// -----------------------------

// function sam(umar,rang){
//     this.age = umar;
//     this.favColor = rang
// }

// console.log( new sam(100, "red") ); 
// console.log( new sam(34,"black") ); 
// console.log( new sam(21, "blue") ); 
// console.log( new sam(19, "pink") ); 

// -----------------------------
// function vohra(){}    // mentality of the developer

function Sam(umar,rang){
    this.age = umar;
    this.favColor = rang;
    // this.fn = function(){
    //     console.log("bhai hai tu mera");
    // }
}

//stored in the prototype
Sam.prototype.fn = function(){
    console.log("bhai hai tu mera");
}


console.log( new Sam(100, "red") ); 
console.log( new Sam(34,"black") ); 
console.log( new Sam(21, "blue") ); 
console.log( new Sam(19, "pink") ); 
