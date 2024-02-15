import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
//Header
const Header = () => {
        const onlineStatus = useOnlineStatus();

// Subscribe to the store
const cartItems = useSelector((store) => store.cart.items);
    return (
            <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
                    <div className="logo-container">
                            <img className="w-44"
                             src="https://images-platform.99static.com/rr768I65sROx4pBpG7MjSv7q24s=/filters:quality(100)/99designs-contests-attachments/117/117132/attachment_117132760" 
                             alt="" />
                             </div>
                    <div className="flex items-center">
                            <ul className="flex p-8 m-8 px-2">
                                <li className="px-4">Online {onlineStatus?"🟢":"🔴"}</li>
                                    <li className="px-4">
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li className="px-4">
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li className="px-4">
                                    <Link to="/grocery">Grocery</Link>
                                    </li>
                                    <li className="px-4">
                                    <Link to="/contact">Contact</Link>
                                    </li>
                                    <li className="font-bold text-xl px-4">
                                    <Link to="/cart">Basket ({cartItems.length})</Link></li>
                            </ul>

                    </div>
            </div>
    );
};

export default Header;