import "../styles/Home.scss";
import hero from "../assets/home/hero-img.png";
import heart from "../assets/home/heart.svg";
const Home = () => {
  return (
    <div className="home-container mt-[67px]">
      <div className="hero-container flex items-center justify-between flex-wrap">
        <div className="hero-left">
          <p>
            <img src={heart} alt="heart image" />
            People Trust Us
          </p>
          <h1>
            We're <span>Serious</span> For <span>Food</span> & Delivery.
          </h1>
          <p>
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
          <button className="order-btn">Order Now</button>
        </div>
        <div className="hero-right">
          <img src={hero} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
