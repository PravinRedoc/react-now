//RestaurantCard

import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) =>{

        const {resData} = props;
        
        return( <div className="res-card m-4 p-4 w-72 bg-gray-200 rounded-lg shadow-sm hover:bg-gray-400 hover:shadow-lg hover:shadow-orange-200">
                <div className="image">
                        <img className="res-logo" src={CON_URL+resData.info.cloudinaryImageId} alt="res-logo" />
                </div>
                <h3 className="res-name font-bold py-2 text-xl rounded-sm">{resData.info.name}</h3>
                <h4 className="cuisine">{resData.info.cuisines.join(", ")}</h4>  
                <h4 className="star-rating">{resData.info.avgRating}</h4>   
                <h4 className="cost-for-two">{resData.info.costForTwo}</h4> 
                <h4 className="delivery-time">{resData.info.sla.slaString}</h4> 
              

                </div>
        )
};


export const withRestaurantPromoted = (RestaurantCard) => {

        return (props) => {
                return (
                        <div className="withPromoted">
                        <label>Promoted</label>
                        <RestaurantCard {...props}/>
                        </div>
                )
        }

};

export default RestaurantCard;

