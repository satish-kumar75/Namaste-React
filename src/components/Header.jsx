import { useState } from "react";
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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
