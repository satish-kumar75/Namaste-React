import { CDN_URL } from "../utils/contants";

/* eslint-disable react/prop-types */
const ItemList = ({ items }) => {
  const handleImageError = (event) => {
    event.target.src =
      "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/12/23/Pictures/_ae26fc2c-4520-11eb-bcf5-ed790659da7b.jpg";
  };
  return (
    <div>
      <div className="menus">
        <div className="recommended-menu">
          {items.map((item) => (
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
                <div className="item-img">
                  <img
                    loading="lazy"
                    src={CDN_URL + item.card.info.imageId}
                    alt=""
                    onError={handleImageError}
                  />
                </div>
                <p>customizable</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
