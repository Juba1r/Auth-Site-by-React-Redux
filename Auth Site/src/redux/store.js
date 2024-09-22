import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../redux/authApi";
import authReducer from "../redux/authSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
