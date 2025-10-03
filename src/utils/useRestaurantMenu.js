import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    // fetching restaurant menu info
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const menuData = await data.json();
        // console.log("menudata", menuData);
        setResInfo(menuData.data);
    };

    return resInfo;
};

export default useRestaurantMenu;