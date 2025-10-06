

// change text - 3 => textContent , innerText ,  innerHTML

// // selection
let p = document.querySelector('p');

// // manipulation  
// p.textContent = "Samarth Vohra"  // brainless // cannot read css
// p.innerText = "Samarth Vohra 2"  // brainfull // can read css
p.innerHTML = "<h2>Samarth Vohra 3</h2>"

// --------------------------------------------
// getter and setter
let div = document.querySelector('div');div
console.log( div.textContent ); //getter
console.log( div.innerText );   //getter
console.log( div.innerHTML );   //getter


