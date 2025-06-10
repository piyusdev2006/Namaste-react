import RestaurantCard from "./RestaurantCard";
import resList from "../utils/jsonData";
import React, { useState } from "react";

    
const Body = () => {
  // Local State Variable using React Hooks "useState"
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Normal JavaScript Utility varibale
  // let listOfRestaurants = [];

  return (
    <div className="body">
      <div className="filetr">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.rating.aggregate_rating >= 4
            );
            setListOfRestaurants(filteredList);
          }}>
          Top-Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {/* <RestaurantCard resData={resList[0]}/> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default Body;