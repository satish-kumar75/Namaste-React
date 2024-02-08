import { CDN_URL } from "../utils/contants";
import star from "../assets/star.svg";

const ResturantCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, locality } =
    resData?.info;
  const { slaString } = resData?.info?.sla;
  const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3 || {};
  const discountInfo = header && subHeader ? `${header} ${subHeader}` : "";

  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId} />
        <p>{discountInfo}</p>
      </div>
      <h3>{name}</h3>
      <div className="rating">
        <img src={star} alt="Rating Star" />
        <h4>{avgRating}</h4>
        <span></span>
        <h4>{slaString}</h4>
      </div>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
    </div>
  );
};

export default ResturantCard;
