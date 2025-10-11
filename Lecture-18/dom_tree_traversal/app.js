
// DOM tree traversal

// selection
let para = document.querySelector('#para')

// 1. down 
// console.log( para.children[0] );
// console.log( para.children[1].children[1].style.color = "red" );


// 2. up
// console.log( para.parentElement.parentElement.parentElement.style.border="2px solid black" );


// 3. right
// console.log(para.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].children[0].innerText = "Happy diwali");


// 4. left
console.log(para.parentElement.parentElement.parentElement.previousElementSibling)








