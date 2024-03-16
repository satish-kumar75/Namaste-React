/* eslint-disable react/prop-types */
import "./Footer.scss";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const SocialIcons = () => (
  <div className="social-logo">
    <img src={facebook} alt="facebook logo" />
    <img src={twitter} alt="twitter logo" />
    <img src={instagram} alt="instagram logo" />
  </div>
);

const FooterColumn = ({ title, items }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SubscribeForm = () => (
  <div className="mail">
    <input type="text" placeholder="Email" />
    <button>Subscribe</button>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const aboutItems = ["About Us", "Service Us", "Contact", "Company"];
  const companyItems = ["Partnership", "Terms of Use", "Privacy", "Sitemap"];

  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h3>Bhukhhar</h3>
          <p>
            In the new era of technology we look a in the future with certainty
            and pride to for our company and.
          </p>
          <SocialIcons />
        </div>
        <FooterColumn title="About Us" items={aboutItems} />
        <FooterColumn title="Company" items={companyItems} />
        <div>
          <h3>Get in touch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <SubscribeForm />
        </div>
      </div>
      <p className="copyright">Copyright © {currentYear} Bhukhhar.</p>
    </div>
  );
};

export default Footer;
