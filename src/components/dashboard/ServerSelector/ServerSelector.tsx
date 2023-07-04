import { useEffect, useState } from "react";
import { useServers } from "../../../hooks/useServers";
import { ChevronDownIcon, ChevronUpIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ServerSelectorListItem } from "./ServerSelectorListItem";
import { useCurrentServer } from "../../../hooks/useCurrentServer";
import { useGetDiscordUrlQuery } from "../../../redux/api/authApi";

export const ServerSelector = () => {
  const [open, setOpen] = useState(false);
  const servers = useServers();
  const currentServer = useCurrentServer();
  const { data: authUrl } = useGetDiscordUrlQuery();

  const toggleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [currentServer]);

  const signInHandler = () => {
    window.location.href = authUrl?.authUrl ?? "";
  };

  const IconComponent = open ? ChevronUpIcon : ChevronDownIcon

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex gap-4 bg-zinc-900 hover:bg-zinc-950 rounded overflow-hidden items-center w-full text-left"
      >
        <img
          className="h-16"
          src={currentServer?.serverIcon ?? "/no-icon.png"}
        ></img>
        <div className="">
          <h1 className="text-sm text-slate-300">Current Server</h1>
          <h2 className="font-semibold truncate">
            {currentServer?.serverName ?? "Not Selected"}
          </h2>
        </div>
        <IconComponent className="h-6 ml-auto mr-2" />
      </button>
      {open && (
        <ul className="absolute mt-2 w-full border-pink-900 backdrop-blur-md backdrop-brightness-50 drop-shadow-md border rounded bg-zinc-900/30">
          {servers.map((server) => (
            <ServerSelectorListItem key={server.id} server={server} />
          ))}
          <li onClick={signInHandler} className="flex gap-2 p-2 items-center border-pink-900 border-b last:border-b-0 hover:bg-zinc-900/60 cursor-pointer">
            <PlusIcon className="mx-3 h-6" />
            <h1 className="ml-4">Add a Server</h1>
          </li>
        </ul>
      )}
    </div>
  );
};
