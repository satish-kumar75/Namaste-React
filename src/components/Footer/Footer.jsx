import "./Footer.scss";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h3>Bhukhhar</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            placeat.
          </p>
          <div className="social-logo">
            <img src={facebook} alt="facebook logo" />
            <img src={twitter} alt="twitter logo" />
            <img src={instagram} alt="instagram logo" />
          </div>
        </div>
        <div>
          <h3>About Us</h3>
          <ul>
            <li>About Us</li>
            <li>Service Us</li>
            <li>Contact</li>
            <li>Company</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>Partnership</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
          <h3>Get in touch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <div className="mail">
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright © {currentYear} Bhukhhar.</p>
    </div>
  );
};

export default Footer;
