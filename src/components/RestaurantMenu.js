import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
import { MENU_API,CLOUDINARY_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [menu, setMenu] = useState(null);

    const { resId } = useParams();
    console.log(resId);
    

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const menuData = await data.json();
        console.log("menudata",menuData);
        setMenu(menuData.data);
    };

    if (menu === null) return <ShimmerUI />;
    

    const { name, avgRating, costForTwoMessage, cuisines, cloudinaryImageId } = menu?.cards[2]?.card?.card?.info;

    const { itemCards } = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || [];
    

    return (
      <div className="restaurant-menu">
        <div className="restaurant-summary">
          <div className="restaurant-details">
            <h1 className="restaurant-name">{name}</h1>
            <h3 className="restaurant-cuisines">{cuisines.join(", ")}</h3>
            <div className="restaurant-metrics">
              <div className="restaurant-ratings">
                <span className="rating-icon">⭐</span>
                <span>{avgRating}</span>
              </div>
              <div className="restaurant-cost">
                <span>{costForTwoMessage}</span>
              </div>
            </div>
          </div>
          <img
            className="restaurant-image"
            src={CLOUDINARY_URL + cloudinaryImageId}
            alt={name}
          />
        </div>

        <div className="restaurant-menu-content">
          <h2 className="menu-title">Menu</h2>
          <ul className="menu-list">
            {/* {itemCards.map((item) => (
              <li key={item.card.info.id} className="menu-item">
                <div className="item-details">
                  <h3 className="item-name">{item.card.info.name}</h3>
                  <p className="item-price">
                    ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                </div>
              </li>
            ))} */}
            {(itemCards?.length > 0 &&
              itemCards.map((item) => (
                <li key={item.card?.info?.id} className="menu-item">
                  <div className="item-details">
                    <h3 className="item-name">{item.card?.info?.name}</h3>
                    <p className="item-price">
                      ₹
                      {(item.card?.info?.price ||
                        item.card?.info?.defaultPrice) / 100}
                    </p>
                  </div>
                </li>
              ))) || <p>No menu available</p>}
          </ul>
        </div>
      </div>
    );
    };

export default RestaurantMenu;