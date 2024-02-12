/* eslint-disable no-unsafe-optional-chaining */
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/contants";
import { useState } from "react";
import Shimmer from "./Shimmer";
import "./menu.scss";
import useResturantMenu from "../utils/useResturantMenu";
import useLocalStorage from "use-local-storage";
import star from "../assets/star.svg";
import yellowstar from "../assets/yellowstar.svg";
import RestaurantCategory from "./RestaurantCategory";
import rupee from "../assets/rupee.svg";
import time from "../assets/time.svg";

const ResturantMenu = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark] = useLocalStorage("isDark", preference);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    locality,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const { slaString, lastMileTravelString } =
    resInfo?.data?.cards?.[0]?.card?.card?.info?.sla;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(resInfo?.data?.cards[0]?.card?.card?.info);
  return (
    <div className="main-menu-container" data-theme={isDark ? "dark" : "light"}>
      <div className="menu-container">
        <div className="res-detail">
          <div className="res-name flex gap-5">
            <img
              className="h-[120px] w-[120px] object-cover rounded-lg"
              src={CDN_URL + cloudinaryImageId}
              alt=""
            />
            <div className="mt-5">
              <h1>{name}</h1>
              <p>{cuisines.join(", ")}</p>
              <span>{locality}</span>
              <span>, {lastMileTravelString}</span>
            </div>
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
          <p>
            {" "}
            <img src={time} alt="" /> {slaString}
          </p>
          <p>
            {" "}
            <img src={rupee} alt="" /> {costForTwoMessage}
          </p>
        </div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            onClick={() => setShowIndex(index === showIndex ? false : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
