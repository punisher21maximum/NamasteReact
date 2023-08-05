// import {CDN_URL} from "../utils/constants";
import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  
  data = props.resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          CDN_URL +
          data.cloudinaryImageId
        }
      />
      <h3>{data.name}</h3>
      <h4>{data.cuisines.join(", ")}</h4>
      <h4>{data.avgRating} starts</h4>
      <h4>Rs {data.costForTwo / 100} FOR TWO</h4>
      <h4>{data.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;