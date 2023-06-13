import { useEffect, useState, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


let listOfRest = [    {
    type: "restaurant",
    data: {
      type: "F",
      id: "26002",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId: "2beebd3688e63e027ee8a11c1c8a72c8",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Fast Food",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      costForTwo: 25000,
      deliveryTime: 41,
      avgRating: "4.3",
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      id: "438436",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      costForTwo: 35000,
      deliveryTime: 26,
      avgRating: "3.9",
    },
    subtype: "basic",
  }];

  
  const Body = () => {
    const [restList, setRestList] = useState(resList);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.611665&lng=76.97867800000002&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

        setRestList(json.data.cards[2].data.data.cards);
    };

    return (
    <div className="body">

        {/* <div className="search">Search Nar</div> */}

        <button className="filter-btn" onClick={() => {
            filteredList=restList.filter((res)=>parseFloat(res.data.avgRating)>4);
            setRestList(filteredList);
        }} >Top Rated Restaurants</button>

        
        <div className="res-container">
        {restList.map((resDatum) => (
            <RestaurantCard key={resDatum.data.id} resData={resDatum} />
        ))}

        {/* <RestaurantCard resData={resData[3]}/> */}
        </div>
    </div>
    );
};

  export default Body;