import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
import { CLOUDINARY_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <ShimmerUI />;

    const { name, avgRating, costForTwoMessage, cuisines, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Restaurant Summary */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
        {/* Left Details */}
        <div className="flex-1 space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600">{cuisines.join(", ")}</p>

          {/* Metrics */}
          <div className="flex items-center gap-6 mt-3">
            <div className="flex items-center gap-1 text-green-600 font-medium">
              ⭐ <span>{avgRating}</span>
            </div>
            <div className="text-gray-700 font-medium">{costForTwoMessage}</div>
          </div>
        </div>

        {/* Right Image */}
        <img
          className="w-40 h-40 rounded-lg object-cover shadow"
          src={CLOUDINARY_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      {/* Menu Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl mt-8 p-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Menu</h2>
        <ul className="space-y-4">
          {(itemCards?.length > 0 &&
            itemCards.map((item) => (
              <li
                key={item.card?.info?.id}
                className="flex justify-between items-center border-b pb-2">
                <h3 className="text-gray-800 font-medium">
                  {item.card?.info?.name}
                </h3>
                <p className="text-gray-700 font-semibold">
                  ₹
                  {(item.card?.info?.price || item.card?.info?.defaultPrice) /
                    100}
                </p>
              </li>
            ))) || <p className="text-gray-500">No menu available</p>}
        </ul>
      </div>
    </div>
  );

};

export default RestaurantMenu;