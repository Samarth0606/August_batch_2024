import React from 'react'
import { Link } from 'react-router-dom'

function RestaurantCard({restArr}) {
  return (
        restArr.map((restDetail)=>{
            return(
                <Link to={`/restaurant/${restDetail.info.id}`}>
                    <div className='m-8'>
                        <img className='w-58 h-42 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restDetail.info.cloudinaryImageId}`} />
                        <h1 className='font-bold'>{restDetail.info.name}</h1>
                        <span className='font-bold'>{restDetail.info.avgRating}</span>
                        <span className='mx-3'>{restDetail.info.sla.slaString}</span>
                        <p>{restDetail.info.cuisines[0]}</p>
                        <p>{restDetail.info.locality}</p>
                    </div>
                </Link>
            )
        })
  )
}

export default RestaurantCard