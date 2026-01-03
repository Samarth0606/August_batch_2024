import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'

function Body() {
    let restArr = ApiCalling(); // can take time
    const [allRestArray,setAllRestArray] = useState(restArr);
    const [isClicked1,setIsClicked1] = useState(false);
    const [isClicked2,setIsClicked2] = useState(false);

    useEffect(()=>{
      if(restArr && restArr.length){
        setAllRestArray(restArr)
      }
    },[restArr])

    function filterTopRestaurant(restArr){
      setAllRestArray(restArr.filter((restaurant)=> restaurant.info.avgRating >= 4.3) )
      setIsClicked1(true);
      setIsClicked2(false);
    }
    function reset(restArr){
      setAllRestArray(restArr)
      setIsClicked1(false);
      setIsClicked2(true);
    }
    
  return (
    <div>
        <h1 className='font-bold text-2xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button onClick={()=>filterTopRestaurant(restArr)} className={isClicked1 ? 'bg-amber-200 border rounded-2xl w-1/12 text-xl p-2 ml-10' : 'border rounded-2xl w-1/12 text-xl p-2 ml-10'}>Rating 4.3+</button>
        <button onClick={()=>reset(restArr)} className={isClicked2 ? 'bg-amber-200 border rounded-2xl w-1/12 text-xl p-2 ml-10' : 'border rounded-2xl w-1/12 text-xl p-2 ml-10'}>Reset</button>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArr={allRestArray} />
        </div>
    </div>
  )
}

export default Body