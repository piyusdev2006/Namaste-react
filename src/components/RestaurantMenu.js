import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  const dummy = "dummy data for the rest of the component. Replace with actual data fetched from API or server";
  
  // state for expanded category accordion 
  const [expandedCategoryIndex, setExpandedCategoryIndex] = useState(null);

  
    if (resInfo === null) return <ShimmerUI />;

    const { name, avgRating, costForTwoMessage, cuisines, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;

    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || [];
  
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

  // console.log(categories);
  

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {
        categories?.map((category, index) => (

          // Controlled component for accordion
          <RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card}
            isExpanded={index === expandedCategoryIndex ? true : false} 
            // passing this child component RestaurantCategory
            setExpandedCategoryIndex={() => setExpandedCategoryIndex(index)}
            dummy={dummy} // dummy data for now. Replace with actual data fetched from API or server
          />
      ))}
    </div>
  );
};

export default RestaurantMenu;