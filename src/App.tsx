import { Route, Routes, useLocation } from "react-router-dom";
import { Card } from "./layout/Card";
import { Header } from "./layout/Header";
import { DiscordCallback } from "./pages/discordCallback";
import { Home } from "./pages/home";
import { Dashboard } from "./pages/dashboard";

/**
 * App entrypoint
 * @returns
 */
function App() {
  const location = useLocation()
  
  return (
    <div className="bg-zinc-900 h-screen w-screen text-slate-200">
      <Header />
      <div className={location.pathname.startsWith("/dashboard") ? "h-full" : "container mx-auto pt-[6rem]"}>
        <Routes>
          <Route
            path="/authenticate/discord-callback"
            element={<DiscordCallback />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
