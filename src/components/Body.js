import { useEffect, useState } from "react";
import ReceipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
    const [listOfRecipes,setListOfRecipes] = useState([]) 
    const [filteredRecipes,setfilteredRecipes] = useState([])

    useEffect(async () => {
      const recipeData = await fetchRecipes();
      setListOfRecipes(recipeData.recipes);
      setfilteredRecipes(recipeData.recipes)
    }, []);
    
    const fetchRecipes = async () => {
      const recipes = await fetch(
        `https://dummyjson.com/recipes`
      )
      const recipeList = await recipes.json()     
      return recipeList
    };

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
            <input type="text" id="search-recipe"></input>
            <button className="btn-search" onClick={() => {
                const searchedValue = document.getElementById('search-recipe')?.value
                const searchedRecipes = listOfRecipes.filter((recipe) => {
                    return recipe.name.toLowerCase().includes(searchedValue.toLowerCase())
                })
                setfilteredRecipes(searchedRecipes)
            }}>Search</button>
          </div>
        </div>
        <div className="res-container">
          {filteredRecipes.map((recipe) => (
            <ReceipeCard key={recipe.id} recipeData={recipe} />
          ))}
        </div>
      </div>
    );
}

export default BodyComponent