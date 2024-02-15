import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();

    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-semibold">Cart</h1>
        
        <div className="w-6/12 mx-auto">
        <button className="bg-black p-2 m-2 font-bold text-orange-50 rounded-lg cursor-pointer flex justify-between" onClick={()=> dispatch(clearCart())}>Clear</button>
      
            <ItemList items={cartItems} />
           
        </div>
        </div>

}

export default Cart;