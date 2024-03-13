// Cart.jsx
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import emptyCartImage from "../assets/EmptyCart.svg";
import deleteItemIcon from "../assets/delete.svg";
import { CDN_URL } from "../utils/contants";
import "../styles/Cart.scss";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length === 0 ? (
    <div className="empty-cart">
      <img src={emptyCartImage} alt="empty cart image" />
      <div className="empty-cart-content">
        <h3>Your Cart is Empty</h3>
        <p>Looks like you haven’t added anything to your cart yet.</p>
        <NavLink to={"/"} className="explore-restaurants-link">
          Explore Restaurants Near You
        </NavLink>
      </div>
    </div>
  ) : (
    <div className="Main-cart-container">
      <div className="cart-container">
        <h2 className="cart-title">My Cart</h2>
        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="item-info">
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt="dish image"
                  className="item-image"
                />
                <div className="item-details">
                  <h3 className="item-name">{item.card.info.name}</h3>
                  <p className="item-price">₹{item.card.info.price / 100}</p>
                  <p className="item-description">
                    {item.card.info.description}
                  </p>
                </div>
              </div>
              <div className="quantity-controls">
                <div className="flex gap-3 border items-center rounded-lg">
                  <button className="quantity-button text-red-400">-</button>
                  <span className="quantity">0</span>
                  <button className="quantity-button text-green-400">+</button>
                </div>
                <img
                  className="delete-icon"
                  src={deleteItemIcon}
                  alt="delete icon"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary-container">
          <div className="cart-summary">
            <h2>Summary</h2>
            <div className="bill-details">
              <p>
                Item Total<span>₹122</span>
              </p>
              <p>
                Delivery Partner Fee<span>₹12</span>
              </p>
              <p>
                Platform Fee<span>₹12</span>
              </p>
              <p>
                GST and Restaurant Charges<span>₹12</span>
              </p>
            </div>
            <div className="apply-promo">
              <input
                type="text"
                placeholder="Promo Code"
                className="promo-input"
              />
              <button className="apply-button">Apply</button>
            </div>
            <div className="order-total">
              <p>
                Order Total<span>₹200</span>
              </p>
            </div>
            <button className="checkout-button">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
