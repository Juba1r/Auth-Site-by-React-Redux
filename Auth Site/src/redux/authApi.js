import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sample-ecom.parallaxlogic.dev/api/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userDetails) => ({
        url: "user/register",
        method: "POST",
        body: userDetails,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
