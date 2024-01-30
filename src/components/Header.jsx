import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <img src={logo} />
        </div>
        <div className="nav-item">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>{" "}
            </li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("LogOut")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
