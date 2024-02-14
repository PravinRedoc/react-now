import RestaurantCard from "./RestaurantCard"
import resData from "../utils/resList";
import { useState, useEffect } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withRestaurantPromoted } from "./RestaurantCard";


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
} ;

const onlineStatus = useOnlineStatus();

if(onlineStatus===false) return <h1>No internet!</h1>

return ListOfRestaurants.length === 0?<Shimer /> : ( <div className="body">
            {/* <div className="search">Search</div>   */}
            <div className="filter flex items-center">
                <div className="search m-1 p-1">
                        <input type="text" className="search-box border border-black" value={searchText} onChange={(e)=>{
                                setsearchText(e.target.value);

                        }}/>
                        <button className="search-btn px-2 py-1 bg-green-100 m-4" onClick={() => {
                                const filteredData = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setFilteredRestaurants(filteredData);
                        }}>Search</button>
                </div>
                <div className="px-2 py-1 bg-green-200">
                <button className="filter-btn" onClick={() => {               
               setFilteredRestaurants(ListOfRestaurants.filter((res) => res.info.avgRating>=4));
            }}>Top rated restaurants</button>
                </div>
                </div>
            <div className="res-containerv flex flex-wrap">                   
                    {FilteredRestaurants.map((res) => 
                    <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
                    {res.info.promoted ? <withRestaurantPromoted  resData={res} />:<RestaurantCard  resData={res} />}
                    </Link>
                    )}           
               </div>
            </div>
    )
}
export default Body;
