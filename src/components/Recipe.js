import React from 'react'

function Recipe({title, calories, image}) {
  return (
    <div className='recipe-container flex-col'>
        <h1>{title}</h1>
        <p>Calories: {calories}</p>
        <img src={image} alt='recipe'/>
    </div>
  )
}

export default Recipe