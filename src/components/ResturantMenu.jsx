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
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const { slaString, lastMileTravelString } =
    resInfo?.data?.cards?.[0]?.card?.card?.info?.sla;

  let itemCards = [];
  let title = "";
  const nestedCategory =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;
  if (nestedCategory) {
    title = nestedCategory.title;
    itemCards = nestedCategory.categories
      ? nestedCategory.categories[0].itemCards
      : [];
  } else {
    const itemCategory =
      resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card?.categories?.[0];
    if (itemCategory) {
      title = itemCategory.title;
      itemCards = itemCategory.itemCards;
    }
  }

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
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
