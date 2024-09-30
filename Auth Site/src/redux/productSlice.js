import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sample-ecom.parallaxlogic.dev/api/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken"); 
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); 
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "user/product", 
    }),
  }),
});

export const { useFetchProductsQuery } = productApi;
