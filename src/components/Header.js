import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          {/* <p>Bhukkhar</p> */}
          <img src={logo} />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
