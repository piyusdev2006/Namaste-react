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
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      {" "}
      {/* Fixed the backgroundColor value */}
      <img
        className="restaurant-logo"
        alt="Restaurant Logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>{" "}
      {/* Changed from cuisine.map to cuisines.join */}
      <p>{avgRating}⭐</p>{" "}
      {/* Changed from rating.aggregate_rating to avgRating */}
      <p>{sla.deliveryTime} minutes</p>{" "}
      {/* Changed from deliveryTime to sla.deliveryTime */}
      <p>{costForTwo}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantCard;