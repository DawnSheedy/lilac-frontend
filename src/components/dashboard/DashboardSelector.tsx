import { useLocation, useNavigate } from "react-router-dom";
import { DashboardDefinitions } from "../../pages/dashboard/DashboardDefinitions";
import { Notice } from "../atomic/Notice";
import { ServerSelector } from "./ServerSelector/ServerSelector";
import { NoPluginClientCTA } from "./WarningCTAs/NoPluginClientCTA";

const routePrefix = "/dashboard";

export const DashboardSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex-none h-full w-[300px] bg-gradient-to-r from-transparent to-pink-900/20 border-r border-pink-800 p-4 pt-[6rem]">
      <div className="flex flex-col gap-4">
        <button
          className="text-lg font-semibold text-left"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
        <hr className="border-pink-800/50" />
        <ServerSelector />
        <hr className="border-pink-800/50" />
        <NoPluginClientCTA />
        {DashboardDefinitions.map((def) => (
          <button
            key={def.path}
            onClick={() => {
              navigate(`/dashboard${def.path}`);
            }}
            className={`text-left p-2 rounded ${
              location.pathname.startsWith(`/dashboard${def.path}`)
                ? ""
                : "hover:"
            }bg-pink-800/30`}
          >
            {def.title}
          </button>
        ))}
      </div>
    </div>
  );
};
