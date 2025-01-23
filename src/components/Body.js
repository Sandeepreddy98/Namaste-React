import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

import DifficultyLevel from "./DifficultyLevel";
import ReceipeCard from "./RecipeCard";
import userContext from "../utils/userContext";

const BodyComponent = () => {
  const [listOfRecipes, setListOfRecipes] = useState([]);
  const [filteredRecipes, setfilteredRecipes] = useState([]);
  const DifficultyLevelIdentification = DifficultyLevel(ReceipeCard);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try{
    const recipes = await fetch(`https://dummyjson.com/recipes`);
    const recipeList = await recipes.json();
    setListOfRecipes(recipeList.recipes);
    setfilteredRecipes(recipeList.recipes);
    }catch(err){
      console.error('Error fetching recipes :',err)
    }
  };

  const networkStatus = useNetworkStatus();
  if (!networkStatus) {
    return (
      <div>
        <h1>You're down</h1>
      </div>
    );
  }
  const { userName, setUserName } = useContext(userContext);

  //conditional rendering
  return !listOfRecipes.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="feature-container">
        <div className="filter-top-res">
          <button
            onClick={() => {
              const topRatedRecipes = listOfRecipes.filter(
                (recipe) => parseFloat(recipe.rating) > 4.5
              );
              setfilteredRecipes(topRatedRecipes);
            }}
          >
            filter top recipes
          </button>
        </div>
        <div className="search-container">
          <input type="text" id="search-recipe" data-testid="searchInput"></input>
          <button
            className="btn-search"
            onClick={() => {
              const searchedValue =
                document.getElementById("search-recipe")?.value;
              const searchedRecipes = listOfRecipes.filter((recipe) => {
                return recipe.name
                  .toLowerCase()
                  .includes(searchedValue.toLowerCase());
              });
              setfilteredRecipes(searchedRecipes);
            }}
          >
            Search
          </button>
        </div>
        <label>User Name : </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="res-container">
        {filteredRecipes.map((recipe, index) => (
          <Link key={recipe.id} to={`/recipes/${index + 1}`}>
            <DifficultyLevelIdentification recipeData={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
