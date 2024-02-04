import { useState } from "react";
import { Link } from "react-router-dom";
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
          <img src={logo} />
        </div>
        <div className="nav-item">
          <ul>
            <li>{onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
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
