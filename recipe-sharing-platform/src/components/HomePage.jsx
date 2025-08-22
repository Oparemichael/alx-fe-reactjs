import React, {useState, useEffect} from 'react';
import recipesData from '../data.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        // Simulate fetching data from an API
        setRecipes(recipesData);
    }, []);
    
   return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">🍽️ Delicious Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <Link 
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden"
          >
         
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 sm:h-40 md:h-48 lg:h-64 xl:h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mt-4 text-gray-800 mb-8">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default HomePage;
