import React from 'react'

function Search({restArr, setAllRestArray}) {

    function handleSearch(searchedText){
        setAllRestArray( restArr.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase())) )
    }

  return (
    <div>
        <input placeholder='Search here...' onChange={(e)=>handleSearch(e.target.value)} className='border w-62 p-2' type="text" />
    </div>
  )
}

export default Search