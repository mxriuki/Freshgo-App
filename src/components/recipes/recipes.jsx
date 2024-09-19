import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Recipes() {
  const [recipe, setRecipe] = useState(null);

  async function fetchRecipes() {
    try {
      const apiKey = "cfe40b830c04461c9390f8a7bb068fbe";
      const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`)
      console.log(21, response.data.recipes[0]);

      setRecipe(response.data.recipes[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="flex flex-col items-center m-4">
      {/* Button to fetch new recipe */}
      <button onClick={fetchRecipes} className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-bold mb-4 transition duration-300 ease-in-out">
        Try our Recipe
      </button>

      {/* Recipe Display */}
      {recipe ? (
        <div className="flex flex-col items-center max-w-3xl p-6 bg-white shadow-lg rounded-lg">
          {/* Recipe Title */}
          <div className="mb-4">
            <a className="text-green-700 text-3xl font-bold hover:underline" href={recipe.url}>
              {recipe.title}
            </a>
          </div>

          {/* Recipe Image */}
          <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover rounded-lg shadow-md mb-4" />

          {/* Ingredients Section */}
          <div className="w-full mb-6">
            <h3 className="text-2xl text-green-800 font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc pl-6 text-lg text-gray-800">
              {recipe.extendedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="w-full mb-6">
            <h3 className="text-2xl text-green-800 font-semibold mb-2">Instructions:</h3>
            <ol className="list-decimal pl-6 text-lg text-gray-800 space-y-2">
              {recipe.analyzedInstructions.map((instruction, index) => (
                <li key={index}>
                  {instruction.steps.map((step, stepIndex) => (
                    <p key={stepIndex}>{step.step}</p>
                  ))}
                </li>
              ))}
            </ol>
          </div>

          {/* Back Button */}
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-bold mt-4 transition duration-300 ease-in-out">
            <Link to="/">Go Back</Link>
          </button>
        </div>
      ) : (
        <div className="text-2xl text-green-700 font-semibold">Loading recipe...</div>
      )}
    </div>
  );
}

export default Recipes;

