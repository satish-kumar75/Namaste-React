import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import Toggle from "./Toggle";
import useLocalStorage from "use-local-storage";

const Header = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <div className="header" data-theme={isDark ? "dark" : "light"}>
        <div className="logo-container">
          <NavLink to="/">
            <img src={logo} />
          </NavLink>
        </div>
        <div className="nav-item">
          <ul>
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
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
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
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        </div>
      </div>
    </div>
  );
};
export default Header;
