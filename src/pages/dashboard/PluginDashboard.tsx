import { useEffect, useState } from "react";
import { TextInput } from "../../components/atomic/TextInput";
import { useCurrentServer } from "../../hooks/useCurrentServer";
import { Card } from "../../layout/Card";
import { usePluginClient } from "../../hooks/usePluginClient";
import { Button } from "../../components/atomic/Button";
import { useSetPluginClientNameMutation } from "../../redux/api/serversApi";

export const PluginDashboard = () => {
  const currentServer = useCurrentServer();
  const { data: plugin, state } = usePluginClient();
  const [serverName, setServerName] = useState(
    currentServer?.serverName ?? "My Server"
  );
  const [savePluginName] = useSetPluginClientNameMutation();

  useEffect(() => {
    setServerName(plugin?.name ?? currentServer?.serverName ?? "My Server");
  }, [plugin?.name, currentServer?.serverName]);

  const saveHandler = () => {
    if (!currentServer) {
      return;
    }
    savePluginName({ server: currentServer, name: serverName });
  };

  return (
    <div className="space-y-4">
      <Card>
        <h1 className="text-lg font-semibold">Plugin Config</h1>
        <p>
          The Minecraft Plugin allows Lilac Utils to communicate with your
          minecraft server. It is required for the app to function.
        </p>
      </Card>
      <Card>
        {!plugin && (
          <div className="bg-pink-800 p-2 text-center rounded mb-4">
            A client has not yet been configured for this server.
          </div>
        )}
        <div className="flex justify-between">
          <div>
            <TextInput
              label="Minecraft Server Name"
              value={serverName}
              onChange={setServerName}
            />
          </div>
          <div>
            <Button label={plugin ? "Save" : "Create"} onClick={saveHandler} />
          </div>
        </div>
      </Card>
    </div>
  );
};
