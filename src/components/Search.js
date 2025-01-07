import React, { useState } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: "daa5b672abc441f58ba44768350e58bc",
            query: query,
          },
        }
      );
      setRecipes(response.data.results);
      setError("");
    } catch (err) {
      setError("Unable to fetch recipes. Please try again later.");
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchRecipes}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Search;
