import React from "react";
import ReactDOM from 'react-dom/client';

import {restaurants} from './restaurants.json' with {type: "json"}


/**
 * Header
 *  - logo
 *  -nav items
 * Body
 *  - restaurant container
 *  - restaurant card
 * Footer
 * 
 */


const HeaderComponent= () => (
    <div className="header">
        <div className="logo-container">
                <img className = "logo" src="https://img.freepik.com/premium-vector/online-food-order-logo-icon_61778-45.jpg?w=740"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
)

const RestaurantCard = (props) => {
    console.log(props);
    const { cloudinaryImageId="",name = "", cuisines = [], avgRating = 0, costForTwo = "", sla = {} } = props?.restaurantData?.info || {};
   return  (<div className="res-card">
        <img className="res-logo" src={"https:///media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
        <h4>{name}</h4>
        <h5>{cuisines.join(', ')}</h5>
        <h5>{avgRating}</h5>
        <h5>{sla?.slaString}</h5>
        <h5>{costForTwo}</h5>
    </div>)
}

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

const AppComponent = () => (
    <div className="app-layout">
        <HeaderComponent/>
        <BodyComponent/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppComponent/>)