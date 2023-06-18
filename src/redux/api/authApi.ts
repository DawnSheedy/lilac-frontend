import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types/User";
import { AuthUrlResponse } from "../../types/AuthUrlResponse";
import { PostCodeResponse } from "../../types/PostCodeResponse";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/auth",
    prepareHeaders: (headers, { getState }) => {
      headers.append(
        "Authorization",
        `Bearer ${(getState() as any).session.authToken}`
      );
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => `/user`,
      providesTags: [{ id: "MAIN", type: "User" }],
    }),
    getDiscordUrl: builder.query<AuthUrlResponse, void>({
      query: () => `/discord-url`,
    }),
    postAuthCode: builder.mutation<PostCodeResponse, string>({
      query: (code) => ({
        url: `/discord-code`,
        method: "POST",
        body: { discord_code: code },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserQuery,
  useGetDiscordUrlQuery,
  usePostAuthCodeMutation,
} = authApi;
