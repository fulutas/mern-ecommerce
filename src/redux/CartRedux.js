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
    deleteProduct: (state, action) => {
        if(state.quantity > 0){
        const removeProduct = state.products.filter((item) => item._id !== action.payload._id || item.size !== action.payload.size) 
        state.products = removeProduct;  
        state.quantity -= action.payload.quantity
        state.totalPrice -= action.payload.price * action.payload.quantity
      }
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
