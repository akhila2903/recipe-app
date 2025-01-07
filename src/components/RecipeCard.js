import React from "react";

const RecipeCard = ({ recipe }) => {
  const saveToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem("favorites", JSON.stringify([...favorites, recipe]));
    alert("Added to favorites!");
  };

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} />
      <button onClick={saveToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default RecipeCard;
