import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Recipes() {
  const [recipe, setRecipe] = useState(null);

  async function fetchRecipes() {
    try {
      const apiKey = "7b5579155cbb4334a349d19e9a73c405";
      const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
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
      <button onClick={fetchRecipes} className="bg-green-600 text-white px-4 py-2 rounded-md font4 mb-4">
        Our recipes 
      </button>
      
      {recipe ? (
        <div className="flex flex-col items-center">
          <div>
            <a className="text-blue-600 font4" href={recipe.url}>
              {recipe.title}
            </a>
          </div>
          
          <img src={recipe.image} alt={recipe.title} className="w-full md:w-1/2 h-96 object-cover rounded-lg" />

          <div>
            <div>
              Ingredients needed:
            {recipe.extendedIngredients.map((ingredient, index) => (
              <span className="text-lg font-bold" key={index}>
                {ingredient.name}{index !== recipe.extendedIngredients.length - 1 ? ", " : ""}
              </span>
            ))}
            </div>
          </div>
          
          <div>
            <div className="font4 font-bold text-lg">
              These are the steps to follow:
            </div>
            {recipe.analyzedInstructions.map((instruction, index) => (
              <div key={index}>
                <ul className="flex flex-col space-y-2 font4 my-2">
                  {instruction.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step.step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading recipe...</div>
      )}
      <button className="bg-green-600 text-white px-4 py-2 rounded-md font4 mt-4"> <Link to="/">Go back</Link></button>
    </div>
  );
}

export default Recipes;
