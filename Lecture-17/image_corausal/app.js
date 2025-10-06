let imgEl = document.querySelector('img')


let images = [
    'https://images.unsplash.com/photo-1759675739458-6e5a4a60a117?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1701062876279-f17c71ec7f98?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1755001060420-7a561e278353?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1759681770982-313332e7f42c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'
]

let n=0;
setInterval(()=>{
    imgEl.setAttribute('src' , images[n]);
    n = ( (n+1) % images.length )
} , 2000)

// --------------------------------------------------------




