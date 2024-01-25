//RestaurantCard

const RestaurantCard = (props) =>{

        const {resData} = props;
        
        return( <div className="res-card">
                <div className="image">
                        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+resData.info.cloudinaryImageId} alt="res-logo" />
                </div>
                <h3 className="res-name">{resData.info.name}</h3>
                <h4 className="cuisine">{resData.info.cuisines.join(", ")}</h4>  
                <h4 className="star-rating">{resData.info.avgRating}</h4>   
                <h4 className="cost-for-two">{resData.info.costForTwo}</h4> 
                <h4 className="delivery-time">{resData.info.sla.slaString}</h4> 
              

                </div>
        )
}

export default RestaurantCard

