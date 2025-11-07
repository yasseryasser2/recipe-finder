import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeDetail from "./components/RecipeDetail";
import RecipeCard from "./components/RecipeCard";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  async function searchRecipes(searchTerm) {
    setLoading(true);
    try {
      let recipeApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

      let fetchRecipe = await fetch(recipeApi);

      let fetchData = await fetchRecipe.json();

      setRecipes(fetchData.meals || []);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    searchRecipes(recipes);
  }, []);

  function handleRecipeClick(recipe) {
    setSelectedRecipe(recipe);
  }

  function handleCloseDetail() {
    setSelectedRecipe(null);
  }

  return (
    <div className="app">
      <h1>🍳 Recipe Finder</h1>
      <SearchBar onSearch={searchRecipes} />

      {loading && <p className="loading">Loading recipes...</p>}

      {selectedRecipe ? (
        <RecipeDetail recipe={selectedRecipe} onClose={handleCloseDetail} />
      ) : (
        <div className="recipes-grid">
          {recipes?.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onClick={handleRecipeClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
