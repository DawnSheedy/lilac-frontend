import { Card } from "../layout/Card";
import { DashboardSelector } from "../components/dashboard/DashboardSelector";
import { Route, Routes } from "react-router-dom";
import { DashboardDefinitions } from "./dashboard/DashboardDefinitions";
import { useCurrentServer } from "../hooks/useCurrentServer";
import { useUser } from "../hooks/useUser";
import { useTimeGreeting } from "../hooks/decoration/useTimeGreeting";

export const Dashboard = () => {
  const user = useUser()
  const currentServer = useCurrentServer();
  const timeGreeting = useTimeGreeting()

  return (
    <div className="h-full flex gap-4 mx-auto container">
      <DashboardSelector />
      <div className="pt-[6rem] w-full">
        {!currentServer && (
          <Card>
            <h1 className="text-lg font-semibold">{timeGreeting}, {user?.displayName}</h1>
            <p>Select a server to continue.</p>
          </Card>
        )}
        {currentServer && (
          <Routes>
            {DashboardDefinitions.map((def) => (
              <Route
                key={def.path}
                path={def.path}
                element={def.element}
              ></Route>
            ))}
          </Routes>
        )}
      </div>
    </div>
  );
};
