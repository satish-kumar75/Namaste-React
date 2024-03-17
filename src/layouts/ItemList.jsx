/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL, ERROR_IMG } from "../utils/contants";
import { addItems, removeItems } from "../utils/cartSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find(
    (cartItem) => cartItem.card.info.id === item.card.info.id,
  );
  // Get the quantity of the item in cart
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleImageError = (event) => {
    event.target.src = ERROR_IMG;
  };

  const handleAddItem = () => {
    dispatch(addItems(item));
  };

  const handleIncrement = () => {
    dispatch(addItems(item));
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      dispatch(removeItems(item));
    }
  };

  return (
    <div className="menu-detail" key={item.card.info.id}>
      <div className="menu-desc">
        <h4>{item.card.info.name}</h4>
        <p>₹{(item.card.info.defaultPrice || item.card.info.price) / 100}</p>
        <p>{item.card.info.description}</p>
      </div>
      <div className="menu-img">
        {!quantity ? (
          <div className="add-btn cursor-pointer" onClick={handleAddItem}>
            <p>Add</p>
            <p>+</p>
          </div>
        ) : (
          <div className="quantity-controls">
            <div className="flex justify-between items-center quantity-button">
              <button
                className="text-red-400 font-extrabold text-xl"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                className="text-green-400 font-extrabold text-xl"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        )}

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
  );
};

const ItemList = ({ items }) => {
  return (
    <div>
      <div className="menus">
        <div className="recommended-menu">
          {items.map((item) => (
            <Item key={item.card.info.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
