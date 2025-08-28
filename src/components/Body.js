import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
  
    
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect is called after the component is rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.88920&lng=81.94280&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const swiggyData = await data.json();
    console.log(swiggyData);

    // Update this line to correctly access the restaurants array
    setListOfRestaurants(
      swiggyData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  // conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <ShimmerUI />;
  // }

  return (
    listOfRestaurants.length ===
    0 ? (
      <ShimmerUI />
    ) : (
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4 // Changed from rating.aggregate_rating to avgRating
              );
              setListOfRestaurants(filteredList);
            }}>
            Top-Rated Restaurant
          </button>
        </div>
        <div className="restaurant-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.info.id} /> // Changed key to use restaurant.info.id
          ))}
        </div>
      </div>
    )
  );
}; 

export default Body;