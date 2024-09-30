// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import authReducer from "./authSlice";
import { productApi } from "./productSlice";
import cartReducer from "./cartSlice"; 

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productApi.middleware),
});

export default store;
