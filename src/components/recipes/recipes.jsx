import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchRecipes() {
    try {
      const response = await axios.get(`https://freshgobackend.onrender.com/recipes/`);
      console.log(response.data);
      setRecipes(response.data);
      
      setCurrentRecipe(getRandomRecipe(response.data));
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function getRandomRecipe(recipes) {
    if (recipes.length === 0) return null; // Handle case with no recipes
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
  }

  function handleRandomRecipe() {
    setCurrentRecipe(getRandomRecipe(recipes));
  }

  useEffect(() => {
    fetchRecipes();
  }, [] );

  return (
    <div className="flex flex-col items-center m-4">
      {/* Button to fetch a random recipe */}
      <button
        onClick={handleRandomRecipe}
        className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-bold mb-4 transition duration-300 ease-in-out"
      >
        Try a Random Recipe
      </button>

      {/* Recipe Display */}
      {loading ? (
        <div className="text-2xl text-green-700 font-semibold">Loading recipes...</div>
      ) : error ? (
        <div className="text-red-700 font-semibold">Error fetching recipes: {error}</div>
      ) : currentRecipe ? (
        <div className="flex flex-col items-center max-w-3xl p-6 bg-white shadow-lg rounded-lg mb-6">
          {/* Recipe Title */}
          <div className="mb-4">
            <a className="text-green-700 text-3xl font-bold hover:underline" href={currentRecipe.image_url}>
              {currentRecipe.title}
            </a>
          </div>

          {/* Recipe Image */}
          <img
            src={currentRecipe.image_url}
            alt={currentRecipe.title}
            className="w-full h-96 object-cover rounded-lg shadow-md mb-4"
          />

          {/* Ingredients Section */}
          <div className="w-full mb-6">
            <h3 className="text-2xl text-green-800 font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc pl-6 text-lg text-gray-800">
              {currentRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="w-full mb-6">
            <h3 className="text-2xl text-green-800 font-semibold mb-2">Instructions:</h3>
            <p className="text-lg text-gray-800">{currentRecipe.instructions}</p>
          </div>

          {/* Back Button */}
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-bold mt-4 transition duration-300 ease-in-out">
            <Link to="/home">Go Back</Link>
          </button>
        </div>
      ) : (
        <div className="text-2xl text-green-700 font-semibold">No recipes available.</div>
      )}
    </div>
  );
}

export default Recipes;
