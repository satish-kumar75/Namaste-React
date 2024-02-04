/* eslint-disable no-unsafe-optional-chaining */
import Shimmer from "./Shimmer";
import "./menu.scss";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import useLocalStorage from "use-local-storage";

const ResturantMenu = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark] = useLocalStorage("isDark", preference);
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

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

  const { itemCards, title } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  return (
    <div className="main-menu-container" data-theme={isDark ? "dark" : "light"}>
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
            <h2>
              {title} ({itemCards.length})
            </h2>
            {itemCards.map((item) => (
              <div className="menu-detail" key={item.card.info.id}>
                <div className="menu-desc">
                  <h4>{item.card.info.name}</h4>
                  <p>
                    ₹
                    {item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100}
                  </p>
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
    </div>
  );
};

export default ResturantMenu;
