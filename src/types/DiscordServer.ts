export interface DiscordServer {
  id: string;
  lastRefresh: Date;
  serverName: string;
  serverIcon: string;
  lastUpdateFailed: boolean;
  createdAt: Date;
  updatedAt: Date;
  UserServer: {
    userHasPermission: true;
    lastPermissionCheck: Date;
    DiscordServerId: string;
    DiscordUserId: string;
  };
}
