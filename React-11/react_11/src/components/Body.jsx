import React from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'

function Body() {
    let restArr = ApiCalling()
    console.log(restArr);
    
  return (
    <div>
        <h1 className='font-bold text-2xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button className='border rounded-2xl w-1/12 text-xl p-2 ml-10'>Rating 4.5+</button>
        <button className='border rounded-2xl w-1/12 text-xl p-2 ml-6'>Reset</button>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArr={restArr} />
        </div>
    </div>
  )
}

export default Body