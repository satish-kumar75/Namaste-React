/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/contants";
import Shimmer from "./Shimmer";
import "./menu.scss";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const data = await fetch(MENU_URL + resId);

      const json = await data.json();
      setResInfo(json.data);
      console.log(json.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    locality,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { slaString, lastMileTravelString } =
    resInfo?.cards?.[0]?.card?.card?.info?.sla;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  // console.log(itemCards[0]?.card.info.name);

  return (
    <div className="menu-container">
      <div className="res-detail">
        <div className="res-name">
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <span>{locality}</span>
          <span>,{lastMileTravelString}</span>
        </div>
        <div className="res-rating">
          <p>⭐ {avgRating}</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className="costs">
        <p>{slaString}</p>
        <p>{costForTwoMessage}</p>
      </div>
      <div className="menus">
        <div className="recommended-menu">
          <h2>Recommended ({itemCards.length})</h2>
          {itemCards.map((item) => (
            <div className="menu-detail" key={item.id}>
              <div className="menu-desc">
                <h4>{item.card.info.name}</h4>
                <p>₹{item.card.info.price / 100}</p>
                <p>{item.card.info.description}</p>
              </div>
              <div className="menu-img">
                <div className="add-btn">
                  <p>Add</p>
                  <p>+</p>
                </div>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                    item.card.info.imageId
                  }
                  alt=""
                />
                <p>customizable</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="combo-menu">
          <h2>Combo ({itemCards.length})</h2>
          {itemCards.map((item) => (
            <div className="menu-detail" key={item.id}>
              <div className="menu-desc">
                <h4>{item.card.info.name}</h4>
                <p>₹{item.card.info.price / 100}</p>
                <p>{item.card.info.description}</p>
              </div>
              <div className="menu-img">
                <div className="add-btn">
                  <p>Add</p>
                  <p>+</p>
                </div>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                    item.card.info.imageId
                  }
                  alt=""
                />
                <p>customizable</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ResturantMenu;
