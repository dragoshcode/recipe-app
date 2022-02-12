import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

function Form() {
  const APP_ID = 'f21e1c8c';
  const APP_KEY = 'e48d57b67b2fa90d02554cb3bd3d2d23';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='App'>
      <h2>Enter your wished recipe 😋</h2>
      <form className='form flex' onSubmit={handleQuery}>
        <input
          type='text'
          className='form-input'
          value={search}
          onChange={handleSearch}
        />
        <button type='submit' className='form-button'>
          Search
        </button>
      </form>
      <div className="recipes-container">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default Form;
