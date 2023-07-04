import { CheckIcon } from "@heroicons/react/24/outline";
import { useCurrentServer } from "../../../hooks/useCurrentServer";
import { useAppDispatch } from "../../../redux/hooks";
import { setCurrentServer } from "../../../redux/slices/interfaceSlice";
import { DiscordServer } from "../../../types/DiscordServer";

export interface ServerSelectorListItemProps {
  server: DiscordServer;
}

export const ServerSelectorListItem = ({
  server,
}: ServerSelectorListItemProps) => {
  const currentServer = useCurrentServer();
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(setCurrentServer(server));
  };

  const isCurrentServer = currentServer?.id === server.id;

  return (
    <li
      onClick={clickHandler}
      key={server.id}
      className={`flex gap-2 items-center overflow-hidden relative border-pink-900 border-b last:border-b-0 ${
        isCurrentServer ? "" : "hover:"
      }bg-zinc-900/60 p-2 cursor-pointer`}
    >
      <img className="absolute w-full left-0 rounded blur-sm brightness-50 -z-10" src={server.serverIcon}></img>
      <img className="h-12 rounded drop-shadow-md" src={server.serverIcon}></img>
      <h1 className="ml-4">{server.serverName}</h1>
      {isCurrentServer && <CheckIcon className="h-6 ml-auto" />}
    </li>
  );
};
