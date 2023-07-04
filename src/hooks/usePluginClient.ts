import { useGetPluginClientQuery } from "../redux/api/serversApi";
import { DataReturnState, DataReturnType } from "../types/DataReturnType";
import { DiscordServer } from "../types/DiscordServer";
import { PluginClient } from "../types/PluginClient";
import { useCurrentServer } from "./useCurrentServer";

export const usePluginClient = (): DataReturnType<PluginClient | null> => {
  const server = useCurrentServer();
  const { data: pluginClient, isLoading } = useGetPluginClientQuery(
    server as DiscordServer,
    {
      skip: server === null,
    }
  );

  return {
    data: pluginClient,
    state: isLoading || server === null ? DataReturnState.Loading : DataReturnState.Loaded,
  };
};
