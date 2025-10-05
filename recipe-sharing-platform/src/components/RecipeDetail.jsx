import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center py-8">Recipe not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
      <p className="text-gray-600 mb-6">{recipe.summary}</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
