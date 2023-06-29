import { Route, Routes } from "react-router-dom";
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
  return (
    <div className="bg-zinc-900 h-screen w-screen pt-[6rem]">
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route
            path="/authenticate/discord-callback"
            element={<DiscordCallback />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
