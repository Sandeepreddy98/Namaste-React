import Shimmer from "./Shimmer"
import useRecipeInfo from "../utils/useRecipeInfo"
import { useParams } from "react-router-dom"

const RecipeDetail = () => {
    const recipeID = useParams()['recId']
    const recipeData = useRecipeInfo(recipeID)
    if(!recipeData) return <Shimmer/>
    const {image,name,reviewCount,prepTimeMinutes,cookTimeMinutes,servings,cuisine,mealType,ingredients,instructions,tags,caloriesPerServing,rating} = recipeData
    
    return (
        <div className="de">
            <img className = "recipe-img" src={image} />
            <h1>{name} <p>{caloriesPerServing} calories</p></h1>
            <p>Rating {rating} of {reviewCount}</p>
            <p>Can be prepared in - {prepTimeMinutes} mins</p>
            <p>Can be cooked in - {cookTimeMinutes} mins</p>
            <p>Servings - {servings}</p>
            <h2>Cusine - {cuisine}</h2>
            <h3>Meal type</h3>
            <ul>
                {mealType.map((meal) => (
                    <li key={meal}>{meal}</li>
                ))}
            </ul>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((ingredient,index) => {
                    return <li key={index}>{ingredient}</li>
                })}
            </ul>
            <h3> Instructions </h3>
                <ul>
                    {
                        instructions.map((instruction,index) => {
                            return <li key={index}>{index + 1} - {instruction}</li>
                        })
                    }
                </ul>
            <h4>Tags</h4>
            <ul>
                {
                tags.map((tag,index) => {
                    return <p key={index}># {tag},</p>
                })
            }
            </ul>
        </div>
    )
}

export default RecipeDetail