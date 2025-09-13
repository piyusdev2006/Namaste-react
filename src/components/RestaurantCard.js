import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    costForTwo,
    areaName,
  } = resData.info;


  return (
    <div className="w-[200px] rounded-xl overflow-hidden shadow-md hover:scale-95 transition-transform duration-200 cursor-pointer">
      {/* Image with overlay */}
      <div className="relative">
        <img
          className="h-[150px] w-full object-cover"
          alt="Restaurant"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
      </div>

      {/* Restaurant Details */}
      <div className="p-2">
        <p className="font-bold text-base truncate">{name}</p>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>

        {/* Ratings & Delivery */}
        <div className="flex items-center justify-between mt-1 text-sm text-gray-700">
          <span className="font-semibold">⭐ {avgRating}</span>
          <span>{sla.deliveryTime} mins</span>
        </div>

        {/* Cost */}
        <p className="text-sm text-gray-600">{costForTwo}</p>
        <p className="text-xs text-gray-500">{areaName}</p>
      </div>
    </div>
  );

};

// Higher Order Component for adding promoted label
// it takes RestaurantCard as a prop and returns a new component with added label

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white text-xs px-2 py-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;