// Q1: Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.

// b. Add a button, on click of which it displays only the items with more than 20 as quantity.


export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Color Pencils', price: 50, quantity: 40 },
              { name: 'Sketchpens', price: 110, quantity: 20 },
              { name: 'Erasor', price: 20, quantity: 20 },
              { name: 'Sharpner', price: 22, quantity: 30 },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Items list not found.',
        })
      }
    }, 2000)
  })
}



// ----------------------------------------


// Q2: Create a React component that fetches a user’s data from an API endpoint using useEffect hook and displays the data (name, image, likes, comments) on the screen using the useState hook. Pass heading (”User Profile”) and width and height for image as props to the component.

export const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/user') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            name: 'Saroj',
            image:
              'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
            likes: 500,
            comments: 10,
          },
        })
      } else {
        reject({
          status: 404,
          message: 'user data not found.',
        })
      }
    }, 2000)
  })
}

// Do this as a homework both (next class screen sharing)