import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import useLocalStorage from "use-local-storage";
import "../styles/Cart.scss";

const Cart = () => {
  const [isDark] = useLocalStorage("isDark");

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div
      className="cart-container mt-[67px] px-24 pt-5"
      data-theme={isDark ? "dark" : "light"}
    >
      <p className="text-center">My Cart</p>
      {/* <div className="w-6/12 m-auto pt-5">
        <ItemList items={cartItems} />
      </div> */}
      <div className="sub-container flex justify-between">
        <div className="cart-item border w-[600px] p-6">
          <div className="flex items-center gap-7 mb-4 border-b-2 pb-4">
            <img
              className="h-28 w-28 object-cover rounded-lg"
              src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/12/23/Pictures/_ae26fc2c-4520-11eb-bcf5-ed790659da7b.jpg"
              alt=""
            />
            <div>
              <h2>Restaurant Name</h2>
              <p>Location</p>
            </div>
          </div>
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex justify-between mb-3">
              <div className="flex gap-7 items-center">
                <img
                  className="h-28 w-28 object-cover rounded-lg"
                  src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/12/23/Pictures/_ae26fc2c-4520-11eb-bcf5-ed790659da7b.jpg"
                  alt=""
                />
                <div>
                  <h3>Dish Name</h3>
                  <p>₹500</p>
                  <p>Dish Detail</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="border h-8 flex items-center gap-4 px-3 rounded-md">
                  <span>-</span>0 <span> + </span>
                </div>
                <p>₹500</p>
                <span>×</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pricing border">
          <div>
            <label>ENTER PROMO CODE</label>
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
          <div>
            <p>Bill Details</p>
            <div>
              <p>
                Item Total <span>₹122</span>
              </p>
              <p>
                Delivery Partner Fee <span>₹12</span>
              </p>
            </div>
            <div>
              <p>
                Delivery Tip <span>Add tip</span>
              </p>
              <p>
                Platform Fee <span>₹12</span>
              </p>
              <p>
                GST and Restaurant Charges <span>₹12</span>
              </p>
            </div>
          </div>
          <div>
            <p>Total Bill</p>
            <span>₹200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
