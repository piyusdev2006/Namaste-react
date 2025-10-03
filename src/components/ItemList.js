import { CLOUDINARY_URL } from "../utils/constants";

const ItemList = ({ items ,dummy}) => {
  console.log(dummy);
  
    return (
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={CLOUDINARY_URL + item.card.info.imageId}
                  className="w-full"
                  alt="food item"
                />
                <button
                  className="w-full py-2 bg-white text-green-600 font-bold
                 border-t border-gray-200 hover:bg-gray-50 transition-colors">
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ItemList;