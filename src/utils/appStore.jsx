import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import couponReducer from "./couponSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    coupon: couponReducer,
  },
});

export default appStore;
