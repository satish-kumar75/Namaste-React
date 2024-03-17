import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (items, newItem) => {
  return items.findIndex((item) => item.card.info.id === newItem.card.info.id);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //mutating the state
      //RTK uses Immer behind the scene
      const newItem = action.payload;
      // Find the index of the item in the cart
      const index = findItemIndex(state.items, newItem);
      // If the item is not already in the cart, add it with quantity 1
      if (index === -1) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        state.items[index].quantity += 1;
      }
    },
    removeItems: (state, action) => {
      const index = findItemIndex(state.items, action.payload);
      if (index !== -1) {
        state.items[index].quantity -= 1;
        if (state.items[index].quantity === 0) {
          state.items.splice(index, 1);
        }
      }
    },
    deleteItem: (state, action) => {
      const index = findItemIndex(state.items, action.payload);
      state.items.splice(index, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearCart, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
