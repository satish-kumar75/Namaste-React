/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/display-name */
import { CDN_URL } from "../utils/contants";
import star from "../assets/star.svg";
import yellowstar from "../assets/yellowstar.svg";

const ResturantCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, locality } =
    resData?.info;
  const { slaString } = resData?.info?.sla;
  const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3 || {};
  const discountInfo = header && subHeader ? `${header} ${subHeader}` : "";

  return (
    <div className="res-card">
      <div className="res-logo">
        <img loading="lazy" src={CDN_URL + cloudinaryImageId} />
        <p>{discountInfo}</p>
      </div>
      <h3>{name}</h3>
      <div className="rating">
        {avgRating >= 4 ? (
          <img src={star} alt="Rating Star" />
        ) : (
          <img src={yellowstar} alt="Rating Star" />
        )}
        <h4>{avgRating}</h4>
        <span></span>
        <h4>{slaString}</h4>
      </div>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
    </div>
  );
};

// Higher-Order Component (HOC) - A Higher-Order Component (HOC) is a function that takes a component and returns a new component with enhanced functionality.

export const topRated = (ResturantCard) => {
  return (props) => {
    return (
      <div className="top-rated">
        <div className="ribbon">
          <span>Top Rated</span>
        </div>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
