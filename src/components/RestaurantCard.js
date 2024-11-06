import { CLOUDINARY_URL } from "../utils/url";

const RestaurantCard = (props) => {
    const { cloudinaryImageId="",name = "", cuisines = [], avgRating = 0, costForTwo = "", sla = {slaString : ""} } = props?.restaurantData?.info || {};
   return  (<div className="res-card">
        <img className="res-logo" src={CLOUDINARY_URL+cloudinaryImageId}/>
        <h4>{name}</h4>
        <h5>{cuisines.join(', ')}</h5>
        <h5>{avgRating}</h5>
        <h5>{sla.slaString}</h5>
        <h5>{costForTwo}</h5>
    </div>)
}

export default RestaurantCard