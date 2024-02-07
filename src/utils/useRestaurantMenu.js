import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    //fetch data
    const [resinfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();

    },[]);

    const  fetchData = async () => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data);
        
    }


    // return restaurant information

    return resinfo;
    
}


export default useRestaurantMenu;