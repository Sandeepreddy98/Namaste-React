import { useEffect, useState } from "react";
import ReceipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
    const [listOfRecipes,setListOfRecipes] = useState([]) 
    useEffect(() => {
        fetchRecipes()
    },[])
    
    const fetchRecipes = async () => {
      const recipes = await fetch(
        `https://dummyjson.com/recipes`
      )
      const recipeList = await recipes.json()      
      setListOfRecipes(recipeList.recipes)
    };

    if(!listOfRecipes.length){
        return <Shimmer/>
    }
    return (<div className="body">
        <div className="filter-top-res">
            <button onClick={() => {
                const topRatedRecipes = listOfRecipes.filter(recipe => parseFloat(recipe.rating) > 4.5)
                setListOfRecipes(topRatedRecipes)
            }}>filter top recipes</button>
        </div>
        <div className="res-container">
            {
                listOfRecipes.map((recipe) => <ReceipeCard key = {recipe.id} recipeData = {recipe}/>)
            }
        </div>
    </div>)
}

export default BodyComponent