/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import emptyCartImage from "../assets/EmptyCart.svg";
import deleteItemIcon from "../assets/delete.svg";
import { CDN_URL } from "../utils/contants";
import "../styles/Cart.scss";
import { addItems, deleteItem, removeItems } from "../utils/cartSlice";
import { useState, useMemo } from "react";
import { applyCoupon, clearCoupon } from "../utils/couponSlice";
import { Toaster, toast } from "sonner";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItems(item));
    dispatch(clearCoupon());
  };

  const handleAddItem = () => {
    dispatch(addItems(item));
  };

  const handleDeleteItem = (item) => {
    toast.success("Item removed from cart");
    dispatch(clearCoupon());
    dispatch(deleteItem(item));
  };
  return (
    <div className="cart-item">
      <div className="item-info">
        <img
          src={CDN_URL + item.card.info.imageId}
          alt="dish image"
          className="item-image"
        />
        <div className="item-details">
          <h3 className="item-name">{item.card.info.name}</h3>
          <p className="item-price">
            ₹{(item.card.info.price * item.quantity) / 100}
          </p>
          <p className="item-description">{item.card.info.description}</p>
        </div>
      </div>
      <div className="quantity-controls">
        <div className="flex gap-3 border items-center rounded-lg">
          <button
            className="quantity-button text-red-400"
            onClick={() => handleRemoveItem(item)}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="quantity-button text-green-400"
            onClick={() => handleAddItem(item)}
          >
            +
          </button>
        </div>
        <img
          className="delete-icon"
          src={deleteItemIcon}
          alt="delete icon"
          onClick={() => handleDeleteItem(item)}
        />
      </div>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const coupon = useSelector((state) => state.coupon);

  const dispatch = useDispatch();

  const [couponCode, setCouponCode] = useState("");
  const [error, setError] = useState("");

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setError("Please enter a coupon code");
      toast.error("Please enter a coupon code");
      return;
    }
    if (couponCode !== "SWIGGY") {
      setError("Invalid coupon code");
      toast.error("Invalid coupon code");
      return;
    }
    dispatch(applyCoupon({ code: couponCode }));
    toast.success("Coupon code applied sucessfully");
    setError(""); // Clear any previous errors
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      // Calculate the price of each item by multiplying its price by its quantity
      const itemPrice = item.card.info.price / 100;
      const itemTotalPrice = itemPrice * item.quantity;

      // Add the price of the current item to the total
      return total + itemTotalPrice;
    }, 0);
  }, [cartItems]);

  const discountedTotal = useMemo(() => {
    const discountAmount = totalPrice * (coupon.discountPercentage / 100);
    return totalPrice - discountAmount;
  }, [totalPrice, coupon]);

  return cartItems.length === 0 ? (
    <div className="empty-cart">
      <Toaster richColors position="top-right" />

      <img src={emptyCartImage} alt="empty cart image" />
      <div className="empty-cart-content">
        <h3>Your Cart is Empty</h3>
        <p>Looks like you haven’t added anything to your cart yet.</p>
        <NavLink to={"/home"} className="explore-restaurants-link">
          Explore Restaurants Near You
        </NavLink>
      </div>
    </div>
  ) : (
    <div className="Main-cart-container">
      <Toaster richColors position="top-right" />
      <div className="cart-container">
        <h2 className="cart-title">My Cart</h2>
        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        <div className="cart-summary-container">
          <div className="cart-summary">
            <h2>Summary</h2>
            <div className="bill-details">
              <p>
                Item Total<span>₹{totalPrice}</span>
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
                placeholder="Enter Coupon Code"
                className="promo-input"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              />
              <button className="apply-button" onClick={handleApplyCoupon}>
                Apply
              </button>
              {/* {error && {} <p className="error-message">{error}</p>} */}
            </div>
            <div className="order-total">
              <p>
                Order Total<span>₹{totalPrice + 36}</span>
              </p>
              {couponCode && <p>Discounted Total: ₹{discountedTotal + 36}</p>}
            </div>
            <button className="checkout-button">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
