/* eslint-disable no-unsafe-optional-chaining */
import Shimmer from "./Shimmer";
import "./menu.scss";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import useLocalStorage from "use-local-storage";
import star from "../assets/star.svg";
import yellowstar from "../assets/yellowstar.svg";
import RestaurantCategory from "./RestaurantCategory";

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
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  if (nestedCategory) {
    title = nestedCategory.title;
    itemCards = nestedCategory.categories
      ? nestedCategory.categories[0].itemCards
      : [];
  } else {
    const itemCategory =
      resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.categories?.[0];
    if (itemCategory) {
      title = itemCategory.title;
      itemCards = itemCategory.itemCards;
    }
  }

  const category =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(category);

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
            <div className="star-rating">
              {avgRating >= 4 ? (
                <img src={star} alt="Rating Star" />
              ) : (
                <img src={yellowstar} alt="Rating Star" />
              )}
              <p style={{ color: avgRating >= 4 ? "#00D26A" : "#C5C507" }}>
                {avgRating}
              </p>
            </div>
            <p>{totalRatingsString}</p>
          </div>
        </div>
        <div className="costs">
          <p>{slaString}</p>
          <p>{costForTwoMessage}</p>
        </div>
        {category.map((c, index) => (
          <RestaurantCategory key={index} />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
