
// // selection
// let h1 = document.querySelector('h1');
// // console.log(h1);

// // manipulation
// WET
// h1.style.color = "green"
// h1.style.backgroundColor = "yellow"
// h1.style.fontSize = "100px"

// --------------------------------------

// selection
let h1 = document.querySelector('h1');

// manipulation
// DRY
h1.style.cssText = `
    color: purple;
    background-color:red;
    border: 2px solid black;
`




