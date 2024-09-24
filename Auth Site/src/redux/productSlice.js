import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sample-ecom.parallaxlogic.dev/api/", // Base URL
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken"); // Fetch the token
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Set Authorization header
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "user/product", // Corrected endpoint
    }),
  }),
});

export const { useFetchProductsQuery } = productApi;
