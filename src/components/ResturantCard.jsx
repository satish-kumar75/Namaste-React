import { CDN_URL } from "../utils/contants";
import star from "../assets/star.svg";

const ResturantCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <div className="rating">
        <img src={star} alt="Rating Star" />
        <h4>{avgRating}</h4>
        <span></span>
        <h4>{slaString}</h4>
      </div>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default ResturantCard;
