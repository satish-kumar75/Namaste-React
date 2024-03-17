import { createSlice } from "@reduxjs/toolkit";

const initialCouponState = {
  code: "",
  discountPercentage: 0,
};

const calculateDiscount = (couponCode) => {
  if (couponCode === "SWIGGY") {
    return 10;
  } else {
    return 0; // Return 0 for invalid coupon codes
  }
};

const couponSlice = createSlice({
  name: "coupon",
  initialState: initialCouponState,
  reducers: {
    applyCoupon: (state, action) => {
      const { code } = action.payload;
      // Update the coupon state with the applied coupon code and discount percentage
      state.code = code;
      state.discountPercentage = calculateDiscount(code);
    },
    clearCoupon: (state) => {
      // Clear the coupon state
      state.code = "";
      state.discountPercentage = 0;
    },
  },
});

export const { applyCoupon, clearCoupon } = couponSlice.actions;

export default couponSlice.reducer;
