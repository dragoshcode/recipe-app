import './App.scss'
import {useEffect, useState} from 'react';

function App() {
  const APP_ID = 'f21e1c8c';
  const APP_KEY = 'e48d57b67b2fa90d02554cb3bd3d2d23';

    useEffect(() => {
      getRecipes()
    }, [])

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=pork&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      console.log(data.hits);
    }

  return <div className='App'>
    <form className='form'>
      <input type="text" className='form-input' />
      <button type="submit" className='form-button'>Search</button>
    </form>
  </div>;
}

export default App;
