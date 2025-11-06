export default function RecipeDetail({ recipe, onClose }) {
  if (!recipe) {
    return null;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`] && recipe[`strIngredient${i}`].trim()) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="recipe-detail">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="detail-image"
      />
      <h2 className="detail-name">{recipe.strMeal}</h2>
      <p>
        {recipe.strCategory}|{recipe.strArea}
      </p>
      <h3>Ingredients</h3>
      <ul className="ingredients-list">
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.measure} {item.ingredient}
          </li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
