import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
  
    
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect is called after the component is rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
      const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.88920&lng=81.94280&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const swiggyData = await data.json();

    // Update this line to correctly access the restaurants array

    const restaurants =
      swiggyData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
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
            <div className="search">
              <input type="text"
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search for restaurants..." />
              <button onClick={() => {
                // filter the retaurant and update the UI
                // console.log(" searchText");
                const filteredRestaurants = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurants);

              }}>Search
              </button>
            </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.0 // Changed from rating.aggregate_rating to avgRating
              );
              setFilteredRestaurants(filteredList);
            }}>
            Top-Rated Restaurant
          </button>
        </div>
        <div className="restaurant-container">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.info.id} /> // Changed key to use restaurant.info.id
          ))}
        </div>
      </div>
    )
  );
}; 

export default Body;