import { useDispatch } from "react-redux";
import { addItem } from "../utils/wishlistSlice";

const RecipeList = ({ recipes }) => {
  const dispatch = useDispatch();

  const handleAddItem = (recipe) => {
    dispatch(addItem(recipe));
  };

  return (
    <div>
      {recipes.map((recipe) => {
        const { caloriesPerServing, cookTimeMinutes, rating, image, id, name } =
          recipe;
        return (
          <div className="recipe" key={id} test data-testid="recipe-card">
            <div className="recipe-data">
              <h3>{name}</h3>
              <p>Calories: {caloriesPerServing}</p>
              <p>Time Taken: {cookTimeMinutes} minutes</p>
              <p>Rating: {rating}</p>
            </div>
            <div className="recipe-image">
              <img src={image} className="recipe-img" alt={recipe.name} />
              <button onClick={() => handleAddItem(recipe)}>Add Item</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
