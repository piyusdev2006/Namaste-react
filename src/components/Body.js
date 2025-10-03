import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
  
    
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Higher Order Component (HOC) to add promoted label to RestaurantCard
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // whenever the state variable update, react triggers a reconciliation cycle (diffing algorithm) and then updates the real DOM or re-renders the component
  //  state variable is immutable
  //  we should not update the state variable directly
  //  to update the state variable we have to use the set function which is given by react
  //  we should not update the state variable directly
  

  useEffect(() => {
    // console.log("useEffect is called after the component is rendered");
    fetchData(); // initial fetching data
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.007136&lng=80.9290685&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const swiggyData = await data.json();
    // console.log(swiggyData);

    // Update this line to correctly access the restaurants array
    const restaurants =
      swiggyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    // console.log(restaurants);

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };


  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h3>🔴 Network Error, Please check your internet connection!!</h3>;

  const{ loggedInUser, setUserName } = useContext(UserContext);

  // conditional rendering
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="min-h-screen bg-gray-50">
      {" "}
      {/* Top Controls Section */}
      <div className="flex flex-wrap justify-center gap-4 p-6">
        {/* Search Box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400" // 🔹 Rounded + shadow + focus effect
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants..."
          />
          <button
            className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition" // 🔹 More modern green button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}>
            Search
          </button>
        </div>
        {/* Top Rated Button */}
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-purple-500 text-white font-medium rounded-lg shadow-md hover:bg-purple-600 transition" // 🔹 Modern purple button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.0
              );
              setFilteredRestaurants(filteredList);
            }}>
            Top Rated Restaurants
          </button>
        </div>
          <div className="flex items-center">
            
            <input className="border border-black p-2"
              value = {loggedInUser}
              onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      {/* Restaurant Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-6 pb-10">
        {/* 🔹 Gap between cards + padding */}
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}>
            {/* if retaurant is promoted then add a promoted label to it using HOC */}
            {restaurant.info.ispromoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}; 

export default Body;
