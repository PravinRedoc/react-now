import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{
    const [showItemsFlag, setShowItems] = useState(false);

    const showItems = () => {
        (setShowItems(!showItemsFlag))
    }
    // console.log(data)

    return <div>
        {/* header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 border-b-4 cursor-pointer">
            <div className="flex justify-between" onClick={showItems}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            {showItemsFlag && <ItemList items={data.itemCards}/>}
        </div>
        
        {/* body */}
        

    </div>

}

export default RestaurantCategory;