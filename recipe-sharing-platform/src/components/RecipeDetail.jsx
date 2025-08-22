// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center text-gray-600">Recipe not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{recipe.title}</h1>
      <p className="text-gray-700 mb-4">{recipe.description}</p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        {recipe.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
      <p className="text-gray-700 whitespace-pre-line">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
