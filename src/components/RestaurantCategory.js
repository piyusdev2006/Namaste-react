import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isExpanded, setExpandedCategoryIndex, dummy }) => {

  const handleClick = () => {
    setExpandedCategoryIndex(data.categoryId);
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
                  <span className="font-bold text-lg"
                  >
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {isExpanded && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
