import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
  
const Body = () => {
    return (
    <div className="body">
        {/* <div className="search">Search Nar</div> */}
        <button className="filter-btn" onClick={() => {
            console.log("Button Clicked");
        }} >Top Rated Restaurants</button>
        <div className="res-container">
        {resList.map((resDatum, index) => (
            <RestaurantCard key={resDatum.data.id} resData={resDatum} />
        ))}

        {/* <RestaurantCard resData={resData[3]}/> */}
        </div>
    </div>
    );
};

  export default Body;