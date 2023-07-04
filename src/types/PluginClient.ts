export interface PluginClient {
  id: number;
  name: string;
  token: string | null;
  lastPing: Date;
}
