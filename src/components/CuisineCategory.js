import RecipeList from "./RecipeList";

const CuisineCategory = ({cuisine,showItems,setShowIndex}) => {
  return (
    <div className="cusine-category-container">
        <div key={cuisine.type}>
          <div
            className="cusine-categoty-card"
            onClick={() => {
              setShowIndex()
            }}
          >
            <h4>{cuisine.type} ({cuisine.recipes.length})</h4>
            <h3>{showItems ? '⬆️':'⬇️'}</h3>
          </div>
          {showItems && <RecipeList recipes={cuisine.recipes} />}
        </div>
    </div>
  );
};

export default CuisineCategory;
