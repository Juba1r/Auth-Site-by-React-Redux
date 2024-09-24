import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../redux/authApi";
import authReducer from "../redux/authSlice";
import { productApi } from "../redux/productSlice"; // Import productApi

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer, // Add productApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productApi.middleware), // Add productApi middleware
});

export default store;
