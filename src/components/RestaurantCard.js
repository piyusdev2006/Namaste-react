const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, rating, image } = resData.info;

  const { deliveryTime } = resData.order;

  return (
    <div className="restaurant-card" style={{ backgroundColor: "f0f0f0" }}>
      <img className="restaurant-logo" alt="Restaurant Logo" src={image.url} />
      <p>{name}</p>
      <p>{cuisine.map((c) => c.name).join(",")}</p>
      <p>{rating.aggregate_rating}⭐</p>
      <p>{deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;