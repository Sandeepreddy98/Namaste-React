const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => {
        const { caloriesPerServing, cookTimeMinutes, rating, image, id, name } =
          recipe;
        return (
          <div className="recipe" key={id}>
            <div className="recipe-data">
              <h3>{name}</h3>
              <p>Calories: {caloriesPerServing}</p>
              <p>Time Taken: {cookTimeMinutes} minutes</p>
              <p>Rating: {rating}</p>
            </div>
            <div className="recipe-image">
              <img src={image} className="recipe-img" alt={recipe.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
