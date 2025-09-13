import { useEffect, useState } from "react";
import { Link } from "react-router";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";
  
    
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
  console.log("Body Rendered, listOfRestaurants: ", listOfRestaurants);

  useEffect(() => {
    console.log("useEffect is called after the component is rendered");
    fetchData(); // initial fetching data
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
            Top Rated
          </button>
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
            {
              restaurant.info.ispromoted
                ?
                (
                  <RestaurantCardPromoted resData={restaurant} />
                )
                :
                (
                  <RestaurantCard resData={restaurant} />
                )
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
}; 

export default Body;




// Body.js (REPLACE your existing Body with this)
// 🔹 New Code Added in many places (see comments)

// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom"; // 🔹 New Code Added: use react-router-dom
// import RestaurantCard from "./RestaurantCard";
// import ShimmerUI from "./ShimmerUI"; // uses your existing shimmer
// import useOnlineStatus from "../utils/useOnlineStatus";

// const LAT = "28.4594965";
// const LNG = "77.0266383";
// const INITIAL_API = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${LAT}&lng=${LNG}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
// const UPDATE_API_BASE = `https://www.swiggy.com/dapi/restaurants/list/update?lat=${LAT}&lng=${LNG}`;

// // 🔹 New Code Added: helper to find restaurants array anywhere in the nested response
// const extractRestaurantsAndOffset = (swiggyData) => {
//   const result = { restaurants: [], nextOffset: null };
//   if (!swiggyData?.data) return result;

//   result.nextOffset = swiggyData.data.pageOffset?.nextOffset || null;
//   const cards = swiggyData.data.cards || [];

//   for (const card of cards) {
//     // common nested places where restaurants appear
//     const r =
//       card?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
//       card?.card?.card?.gridElements?.restaurants ||
//       card?.card?.gridElements?.infoWithStyle?.restaurants ||
//       card?.card?.gridElements?.restaurants ||
//       card?.restaurants ||
//       card?.card?.card?.restaurants;

//     if (Array.isArray(r) && r.length) {
//       result.restaurants = r;
//       break;
//     }
//   }

//   return result;
// };

// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   // 🔹 New Code Added: for infinite / paginated fetch
//   const [offset, setOffset] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [initialLoading, setInitialLoading] = useState(true);

//   // 🔹 New Code Added: prevent double fetches
//   const isFetchingRef = useRef(false);

//   console.log("Body Rendered, restaurants:", listOfRestaurants.length);

//   // 🔹 Initial fetch (v5 endpoint) - replace initial list
//   useEffect(() => {
//     fetchInitial();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const fetchInitial = async () => {
//     setInitialLoading(true);
//     setLoading(true);
//     isFetchingRef.current = true; // block duplicates
//     try {
//       const res = await fetch(INITIAL_API);
//       const json = await res.json();
//       console.log("initial response", json); // 🔹 New Code Added: helpful debug log
//       const { restaurants, nextOffset } = extractRestaurantsAndOffset(json);

//       setListOfRestaurants(restaurants);
//       // set filtered depending on whether user has search text
//       setFilteredRestaurants(
//         searchText.trim()
//           ? restaurants.filter((r) =>
//               r?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
//             )
//           : restaurants
//       );
//       setOffset(nextOffset);
//     } catch (err) {
//       console.error("Initial fetch failed:", err);
//     } finally {
//       isFetchingRef.current = false;
//       setInitialLoading(false);
//       setLoading(false);
//     }
//   };

//   // 🔹 New Code Added: fetch more (update endpoint) - appends results
//   const fetchMore = async () => {
//     if (!offset) return;
//     if (isFetchingRef.current) return;

//     isFetchingRef.current = true;
//     setLoading(true);
//     try {
//       const res = await fetch(`${UPDATE_API_BASE}&offset=${offset}`);
//       const json = await res.json();
//       console.log("update response", json); // 🔹 New Code Added: debug
//       const { restaurants: newRestaurants, nextOffset } =
//         extractRestaurantsAndOffset(json);

//       if (Array.isArray(newRestaurants) && newRestaurants.length) {
//         setListOfRestaurants((prev) => {
//           const merged = [...prev, ...newRestaurants];
//           return merged;
//         });

//         // 🔹 New Code Added: preserve user's active filter/search
//         setFilteredRestaurants((prevFiltered) => {
//           // if user has typed a search, re-run the filter on the new combined list
//           if (searchText.trim()) {
//             const combined = [...listOfRestaurants, ...newRestaurants];
//             return combined.filter((r) =>
//               r?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
//             );
//           } else {
//             return [...prevFiltered, ...newRestaurants];
//           }
//         });
//       }

//       setOffset(nextOffset);
//     } catch (err) {
//       console.error("Fetch more failed:", err);
//     } finally {
//       isFetchingRef.current = false;
//       setLoading(false);
//     }
//   };

//   // 🔹 New Code Added: infinite scroll listener (debounced by isFetchingRef)
//   useEffect(() => {
//     const onScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 300 >=
//         document.documentElement.scrollHeight
//       ) {
//         // near bottom
//         if (!isFetchingRef.current && offset) {
//           fetchMore();
//         }
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [offset, searchText]);

//   // search handler (still manual "Search" button in UI; you can also make it auto)
//   const handleSearch = () => {
//     const txt = searchText.trim().toLowerCase();
//     if (!txt) {
//       setFilteredRestaurants(listOfRestaurants);
//       return;
//     }
//     setFilteredRestaurants(
//       listOfRestaurants.filter((r) =>
//         r?.info?.name?.toLowerCase().includes(txt)
//       )
//     );
//   };

//   const onlineStatus = useOnlineStatus();
//   if (onlineStatus === false)
//     return (
//       <h3>🔴 Network Error, Please check your internet connection!!</h3>
//     );

//   // 🔹 Use ShimmerUI for initial load; use same ShimmerUI while paginating too
//   if (initialLoading) return <ShimmerUI />; // 🔹 New Code Added

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Top Controls Section */}
//       <div className="flex flex-wrap justify-center gap-4 p-6">
//         {/* Search Box */}
//         <div className="flex items-center gap-2">
//           <input
//             type="text"
//             className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             placeholder="Search for restaurants..."
//           />
//           <button
//             className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>

//         {/* Top Rated Button */}
//         <div className="flex items-center">
//           <button
//             className="px-4 py-2 bg-purple-500 text-white font-medium rounded-lg shadow-md hover:bg-purple-600 transition"
//             onClick={() => {
//               const filteredList = listOfRestaurants.filter(
//                 (res) => parseFloat(res?.info?.avgRating) >= 4.0
//               );
//               setFilteredRestaurants(filteredList);
//             }}
//           >
//             Top Rated
//           </button>
//         </div>
//       </div>

//       {/* Restaurant Cards Grid */}
//       <div className="flex flex-wrap justify-center gap-6 px-6 pb-10">
//         {filteredRestaurants.map((restaurant) => (
//           <Link
//             key={restaurant.info.id}
//             to={"/restaurants/" + restaurant.info.id}
//           >
//             <RestaurantCard resData={restaurant} />
//           </Link>
//         ))}
//       </div>

//       {/* 🔹 New Code Added: show ShimmerUI when paginating */}
//       {loading && <ShimmerUI />}
//     </div>
//   );
// };
// export default Body;
