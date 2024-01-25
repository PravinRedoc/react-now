import RestaurantCard from "./RestaurantCard"
import resData from "../utils/resList";
import { useState, useEffect } from "react";
import Shimer from "./Shimer";


//Body
const Body = () =>{
const [ListOfRestaurants,setresData] = useState([]);
const [FilteredRestaurants,setFilteredRestaurants] = useState();
const [searchText, setsearchText] = useState("");
useEffect(() => {
        fetchData();
},[]);

const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
       setresData(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
       setFilteredRestaurants(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
} 


return ListOfRestaurants.length === 0?<Shimer /> : ( <div className="body">
            {/* <div className="search">Search</div>   */}
            <div className="filter">
                <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                                setsearchText(e.target.value);

                        }}/>
                        <button className="search-btn" onClick={() => {
                                const filteredData = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setFilteredRestaurants(filteredData);
                        }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {               
               setFilteredRestaurants(ListOfRestaurants.filter((res) => res.info.avgRating>=4));
            }}>Top rated restaurants</button></div>
            <div className="res-container">                   
                    {FilteredRestaurants.map((res) => <RestaurantCard key={res.info.id} resData={res} />)}           
               </div>
            </div>
    )
}
export default Body;
