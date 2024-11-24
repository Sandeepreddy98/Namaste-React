import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/wishlistSlice";
import Shimmer from "./Shimmer";
const WishList = () => {
  const wishListedItems = useSelector((store) => store.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return !wishListedItems.length ? (
    <Shimmer />
  ) : (
    <div>
      {wishListedItems.map((item) => {
        const { caloriesPerServing, cookTimeMinutes, name, rating, id, image } =
          item;
        return (
          <div className="recipe" key={id}>
            <div className="recipe-data">
              <h3>{name}</h3>
              <p>Calories: {caloriesPerServing}</p>
              <p>Time Taken: {cookTimeMinutes} minutes</p>
              <p>Rating: {rating}</p>
            </div>
            <div className="recipe-image">
              <img src={image} className="recipe-img" alt={name} />
              <button onClick={() => handleRemoveItem(item)}>
                Remove Item
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishList;
