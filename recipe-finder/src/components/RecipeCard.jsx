export default function RecipeCard({ recipe, onClick }) {
  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="recipe-image"
      />
      <h3 className="recipe-name">{recipe.strMeal}</h3>
      <p className="recipe-category">{recipe.strCategory}</p>
    </div>
  );
}
