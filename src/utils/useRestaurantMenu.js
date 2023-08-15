import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    console.log("useRestaurantMenu start");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        debugger;

        const data = await fetch(MENU_URL + resId);
        const json = await data.json();

        debugger;

        setResInfo(json.data);
    }

    console.log("useRestaurantMenu end");

    return resInfo;
}

export default useRestaurantMenu;