import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DiscordServer } from "../../types/DiscordServer";
import { PluginClient } from "../../types/PluginClient";

export const serversApi = createApi({
  reducerPath: "serversApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/servers",
    prepareHeaders: (headers, { getState }) => {
      headers.append(
        "Authorization",
        `Bearer ${(getState() as any).session.authToken}`
      );
      return headers;
    },
  }),
  tagTypes: ["Server", 'PluginClient'],
  endpoints: (builder) => ({
    getServers: builder.query<DiscordServer[], void>({
      query: () => `/`,
      transformResponse: (response: any) => response.servers,
      providesTags: (response) =>
        response
          ? [
              ...response.map((server) => ({
                id: server.id,
                type: "Server" as const,
              })),
              { id: "LIST", type: "Server" },
            ]
          : [{ id: "LIST", type: "Server" }],
    }),
    getPluginClient: builder.query<PluginClient | null, DiscordServer>({
      query: (arg: DiscordServer) => `/${arg.id}/minecraft-client/`,
      transformResponse: (baseValue: PluginClient | null) =>
        baseValue === null
          ? null
          : { ...baseValue, lastPing: new Date(baseValue.lastPing) },
      providesTags: (response) => [{ id: response?.id ?? 'Null', type: 'PluginClient' }]
    }),
  }),
});

export const { useGetServersQuery, useGetPluginClientQuery } = serversApi;
