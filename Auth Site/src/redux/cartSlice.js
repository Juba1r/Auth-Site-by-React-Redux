import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount: 0, // Total count of items in the cart
    items: [], // Array to hold cart items
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.cartCount += 1; // Increment the total count
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        // If the product is already in the cart, increment its quantity
        existingProduct.quantity += 1;
      } else {
        // Add the new product to the cart with a quantity of 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeOneFromCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);

      if (existingProduct) {
        // Decrement the quantity by 1
        existingProduct.quantity -= 1;
        // Decrement the total cart count
        state.cartCount -= 1;

        // If quantity is 0, remove the product from the cart
        if (existingProduct.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== productId);
        }
      }
    },
  },
});

// Export actions for use in components
export const { addToCart, removeOneFromCart } = cartSlice.actions;
export default cartSlice.reducer;
