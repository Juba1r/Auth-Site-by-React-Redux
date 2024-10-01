import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount: 0,
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.cartCount += 1;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeOneFromCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity -= 1;

        state.cartCount -= 1;

        if (existingProduct.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== productId);
        }
      }
    },
  },
});

export const { addToCart, removeOneFromCart } = cartSlice.actions;
export default cartSlice.reducer;
