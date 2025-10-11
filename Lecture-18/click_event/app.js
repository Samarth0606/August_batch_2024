// function handleClick1(){
//     console.log("Hi i am 1");
// }

// function handleClick2(){
//     console.log("Hi i am 2");
// }


// 2nd way
// let div = document.querySelector('div')
// div.onclick = handleClick1;

// let p = document.querySelector('p')
// p.onclick = handleClick2;


// ----------------------------------------------
// single task
// function handleClick1(){
//     console.log("icecream");
// }

// function handleClick2(){
//     console.log("lolipop");
// }

// let btn = document.querySelector('#sam')

// btn.onclick = handleClick1;
// btn.onclick = handleClick2; //overriding


// ----------------------------------------------
// multiple task (best)

function handleClick1(){
    console.log("icecream");
}

function handleClick2(){
    console.log("lolipop");
}

let btn = document.querySelector('#sam')

// btn.onclick = handleClick1;
btn.addEventListener('click' , handleClick1);

// btn.onclick = handleClick2; 
btn.addEventListener('click' , handleClick2);
