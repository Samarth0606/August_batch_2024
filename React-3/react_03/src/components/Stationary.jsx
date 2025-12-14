import React from 'react'

function Stationary({items}) {

  return (
    <div>
        {
            items.map((item)=>{
                return(
                    <h1> {item} </h1>
                )
            })
        }

    </div>
  )
}

export default Stationary