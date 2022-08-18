import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [], // cart products
    quantity: 0, // cart total qty
    totalPrice: 0, // cart total price
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload); // products payload
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
