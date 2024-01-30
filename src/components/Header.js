import { Link } from "react-router-dom";
//Header
const Header = () => {
    return (
            <div className="header">
                    <div className="logo-container">
                            <img className="logo"
                             src="https://images-platform.99static.com/rr768I65sROx4pBpG7MjSv7q24s=/filters:quality(100)/99designs-contests-attachments/117/117132/attachment_117132760" 
                             alt="" />
                             </div>
                    <div className="nav-items">
                            <ul>
                                    <li>
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                    <Link to="/contact">Contact Us</Link>
                                    </li>
                                    <li>Basket</li>
                            </ul>

                    </div>
            </div>
    );
};

export default Header;