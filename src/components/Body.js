import { useEffect, useState } from "react";
import ReceipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {
    const [listOfRecipes,setListOfRecipes] = useState([]) 
    const [filteredRecipes,setfilteredRecipes] = useState([])

    useEffect(() => {
      fetchRecipes();
    }, []);
    
    const fetchRecipes = async () => {
      try{
        const recipes = await fetch(
          `https://dummyjson.com/recipes`
        )
        const recipeList = await recipes.json()     
        setListOfRecipes(recipeList.recipes);
        setfilteredRecipes(recipeList.recipes)
      }catch(err){
        console.error('Error fetching recipes :',err)
      }
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
          {filteredRecipes.map((recipe,index) => (
            <Link key = {recipe.id} to={`/recipes/${index+1}`}><ReceipeCard recipeData={recipe} /></Link>
          ))}
        </div>
      </div>
    );
}

export default BodyComponent