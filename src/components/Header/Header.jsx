import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import Toggle from "../BtnToggleTheme/Toggle";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import Cart from "../../assets/Cart.jsx";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const onlineStatus = useOnlineStatus();
  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="nav-item">
          <div
            className={`nav-toggle ${showNav ? "open" : ""}`}
            onClick={toggleNav}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-list ${showNav ? "open" : ""}`}>
            <li style={{ color: onlineStatus ? "#00D26A" : "red" }}>●</li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/grocery">Grocery</NavLink>
            </li>
            <li className="relative">
              <NavLink to="/cart">
                <Cart fill="currentColor" className="w-6 h-6" />
                <span className="text-white absolute top-1 right-0 w-5 h-5 rounded-full bg-[#F65F5F] flex items-center justify-center text-xs ">
                  {cartItems.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="login-btn">
          <NavLink to="/login">Login</NavLink>
        </div>
        <Toggle />
      </div>
    </div>
  );
};
export default Header;
