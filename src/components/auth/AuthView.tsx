import { useLocation, useNavigate } from "react-router-dom";
import {
  useGetDiscordUrlQuery,
  useGetUserQuery,
} from "../../redux/api/authApi";
import { Button } from "../atomic/Button";

export const AuthView = () => {
  const location = useLocation();
  const { data: authUrl } = useGetDiscordUrlQuery();
  const { data: user, isLoading, error } = useGetUserQuery();

  const signInHandler = () => {
    window.location.href = authUrl?.authUrl ?? "";
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {(error || !user) &&
        location.pathname !== "/authenticate/discord-callback" && (
          <div className="flex gap-4 items-center">
            <div className="text-slate-100">Not signed in</div>
            <Button
              label="Sign in with Discord"
              onClick={signInHandler}
            ></Button>
          </div>
        )}
      {user && (
        <div className="flex gap-4 items-center relative">
          {!user.avatarUrl && <div
            className={`blur-3xl w-[175px] opacity-30 h-[100px] right-[-1rem] absolute rounded-full -z-30`}
            style={{
              backgroundColor: `#${user.color?.toString(16) ?? "FF0000"}`,
            }}
          ></div>}
          {user.avatarUrl && <img src={user.avatarUrl} className="blur-xl w-[175px] opacity-50 h-[100px] right-[0rem] absolute rounded-full -z-30"></img>}
          <div>
            <div className="text-slate-200 drop-shadow-sm">Hi, {user.displayName}</div>
            <div className="text-slate-400 text-xs text-right drop-shadow-sm">
              @{user.userName}
            </div>
          </div>

          <img
            className="rounded-full h-9 w-9"
            src={
              user.avatarUrl ??
              `https://cdn.discordapp.com/embed/avatars/index.png`
            }
          ></img>
        </div>
      )}
    </div>
  );
};
