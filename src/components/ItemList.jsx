import { useDispatch } from "react-redux";
import { CDN_URL,ERROR_IMG } from "../utils/contants";
import { addItems } from "../utils/cartSlice";

/* eslint-disable react/prop-types */
const ItemList = ({ items }) => {
  const handleImageError = (event) => {
    event.target.src =
    ERROR_IMG;
  };
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
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
                <div
                  className="add-btn cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
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
