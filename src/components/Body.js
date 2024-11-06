import restaurants from "../utils/restaurants"

const BodyComponent = () => {
    return (<div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {
                restaurants.map(restaurant => <RestaurantCard key = {restaurant.info.id} restaurantData = {restaurant}/>)
            }
        </div>
    </div>)
}

export default BodyComponent