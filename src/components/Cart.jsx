import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import useLocalStorage from "use-local-storage";
import "./Cart.scss";

const Cart = () => {
  const [isDark] = useLocalStorage("isDark");

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div
      className="cart-container  h-svh mt-[67px]"
      data-theme={isDark ? "dark" : "light"}
    >
      <div className="w-6/12 m-auto pt-5">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
