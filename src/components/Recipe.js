import React from 'react';

function Recipe({ title, calories, image, ingredients }) {
  return (
      <div className='recipes flex-col'>
        <h1>{title}</h1>
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
        <img src={image} alt='recipe' />
        <p>Calories: {calories}</p>
      </div>
  );
}

export default Recipe;
