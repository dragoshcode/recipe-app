import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

function Form() {
  const APP_ID = 'f21e1c8c';
  const APP_KEY = 'e48d57b67b2fa90d02554cb3bd3d2d23';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=pork&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handleSearch = (e) => {
      setSearch(e.target.value)
  }

  return (
    <div className='App'>
      <form className='form flex'>
        <input type='text' className='form-input' value={search} onChange={handleSearch} />
        <button type='submit' className='form-button'>
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default Form;
