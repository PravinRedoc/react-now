import { CON_URL } from "../utils/constants";

const ItemList = ({items}) =>{
    console.log(items);

    return (
    <div>    
        {items.map((item)=>
                <div className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between" key={item.card.info.id}>
                    <div className="w-9/12">                    
                        <div className="py-2">
                            <span className="">{item.card.info.name}</span>
                            <span>- ₹{item.card.info.price/100}</span>                        
                        </div>                  
                        <div className="text-xs">
                            <p >{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-black text-white">Add +</button>
                        </div>
                        <img src={CON_URL+item.card.info.imageId} alt="" />
                        
                    </div>
                </div>)}  
    </div>
    );

};


export default ItemList;