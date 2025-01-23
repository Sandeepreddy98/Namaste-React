import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import CuisineCategory from "./CuisineCategory";

const CuisineLayout = () => {
  const [cuisines, setCuisines] = useState([]);
  const [showIndex, setShowIndex] = useState(-1);

  useEffect(() => {
    fetchDataBasedOnCategory();
  }, []);

  const fetchDataBasedOnCategory = async () => {
    const data = await fetch(`https://dummyjson.com/recipes`).then((res) =>
      res.json()
    );
    let cuisineCategory = [];
    for (let recipe of data.recipes) {
      let flag = false;
      for (let cuisine of cuisineCategory) {
        if (recipe?.cuisine === cuisine?.type) {
          cuisine.recipes.push(recipe);
          flag = true;
          break;
        }
      }
      if (!flag) {
        cuisineCategory.push({ type: recipe.cuisine, recipes: [recipe] });
      }
    }
    setCuisines(cuisineCategory);
  };

  return !cuisines.length ? (
    <Shimmer />
  ) : (
    <div className="cusine-layout">
      {cuisines.map((cuisine, index) => {
        return (
          <CuisineCategory
            key={cuisine.type}
            cuisine={cuisine}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? -1 : index)}
          ></CuisineCategory>
        );
      })}
    </div>
  );
};

export default CuisineLayout;
