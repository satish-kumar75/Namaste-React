import { NavLink } from "react-router-dom";
import "../styles/Home.scss";
import hero from "../assets/home/hero-img.png";
import hero2 from "../assets/home/hero-img2.png";
import hero3 from "../assets/home/hero-img3.png";
import heart from "../assets/home/heart.svg";
import food1 from "../assets/home/food1.png";
import food2 from "../assets/home/food2.png";
import food3 from "../assets/home/food3.png";
import food4 from "../assets/home/food4.png";
import food5 from "../assets/home/food5.png";
import food6 from "../assets/home/food6.png";
import seek from "../assets/home/SeekPng.png";
import arrowdown from "../assets/home/arrowdown.svg";
import slider from "../assets/home/slider.svg";
import order from "../assets/home/order.svg";
import time from "../assets/home/time.svg";
import googlestore from "../assets/home/googlestore.svg";
import appstore from "../assets/home/appstore.svg";
import reservation from "../assets/home/reservation.svg";

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
            <img src={arrowdown} alt="" />
            We're <span>Serious</span> For <span>Food</span> & Delivery.
          </h1>
          <p>
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
          <NavLink to="/restaurant" className="order-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Order Now
          </NavLink>
        </div>
        <div className="hero-right">
          <img src={hero} alt="hero image" />
          {[food1, food2, food3, food4, food5, food6, seek].map(
            (food, index) => (
              <img key={index} src={food} alt="food images" />
            )
          )}
        </div>
        <img className="slider" src={slider} alt="slider image" />
      </div>
      <div className="H-container flex items-center gap-x-20 flex-wrap">
        <img src={hero2} alt="hero image 2" />
        <div>
          <h2 className="mb-4">
            We are <span>more</span> than <span>multiple</span> service
          </h2>
          <p className="mb-4">
            This is a type of restaurant which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes from the French word meaning food.
          </p>
          <div className="flex gap-x-16 flex-wrap">
            <div className="flex-cont">
              <p className="flex items-center">
                <img src={order} alt="" className="mr-2" /> Online Order
              </p>
              <p className="flex items-center">
                <img src={reservation} alt="" className="mr-2" />{" "}
                Pre-Reservation
              </p>
              <p className="flex items-center">
                <img src={reservation} alt="" className="mr-2" /> Super Chef
              </p>
            </div>
            <div className="flex-cont">
              <p className="flex items-center">
                <img src={time} alt="" className="mr-2" /> 24/7 Service
              </p>
              <p className="flex items-center">
                <img src={reservation} alt="" className="mr-2" /> Organized
                Foodhut Place
              </p>
              <p className="flex items-center">
                <img src={reservation} alt="" className="mr-2" /> Clean Kitchen
              </p>
            </div>
          </div>
          <NavLink to="/about" className="order-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About Us
          </NavLink>
        </div>
      </div>
      <div className="H2-container flex items-center justify-between flex-wrap">
        <div>
          <h2 className="mb-4">
            It’s Now <span>More Easy</span> to Order by Our Mobile{" "}
            <span>App</span>
          </h2>
          <p className="mb-4">
            All you need to do is downlode one of the best delivery apps, make a
            and most companies are opting for mobile app devlopment for food
            delivery
          </p>
          <div className="flex gap-x-4 mt-4">
            <img src={googlestore} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
        <img src={hero3} alt="" />
      </div>
    </div>
  );
};

export default Home;
