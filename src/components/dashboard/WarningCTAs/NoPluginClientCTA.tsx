import { Fragment } from "react";
import { usePluginClient } from "../../../hooks/usePluginClient";
import { DataReturnState } from "../../../types/DataReturnType";
import { Notice } from "../../atomic/Notice";
import { useNavigate } from "react-router-dom";

export const NoPluginClientCTA = () => {
  const navigate = useNavigate();
  const { data: pluginClient, state } = usePluginClient();

  return (
    <Fragment>
      {state === DataReturnState.Loaded && pluginClient === null && (
        <Notice
          title="Notice"
          text="The Minecraft Plugin has not been setup."
          buttonText="Setup"
          onClick={() => {
            navigate("/dashboard/plugin");
          }}
        />
      )}
    </Fragment>
  );
};
