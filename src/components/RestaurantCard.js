//RestaurantCard

const RestaurantCard = (props) =>{

        const {resData} = props;
        
        return( <div className="res-card m-4 p-4 w-56 bg-gray-200 rounded-lg shadow-sm hover:bg-gray-400 hover:shadow-lg hover:shadow-orange-200">
                <div className="image">
                        <img className="res-logo w-[200px] h-[200px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+resData.info.cloudinaryImageId} alt="res-logo" />
                </div>
                <h3 className="res-name font-bold py-2 text-xl rounded-sm">{resData.info.name}</h3>
                <h4 className="cuisine">{resData.info.cuisines.join(", ")}</h4>  
                <h4 className="star-rating">{resData.info.avgRating}</h4>   
                <h4 className="cost-for-two">{resData.info.costForTwo}</h4> 
                <h4 className="delivery-time">{resData.info.sla.slaString}</h4> 
              

                </div>
        )
}

export default RestaurantCard

