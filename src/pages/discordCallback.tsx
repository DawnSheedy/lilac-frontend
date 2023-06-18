import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "../layout/Card";
import { useEffect } from "react";
import {
  useGetDiscordUrlQuery,
  usePostAuthCodeMutation,
} from "../redux/api/authApi";
import { useUser } from "../hooks/useUser";
import { useSetToken } from "../hooks/useSetToken";

export const DiscordCallback = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data: authUrl } = useGetDiscordUrlQuery();
  const setToken = useSetToken();
  const user = useUser();
  const [postAuthCode, { data: authData, error: authError }] =
    usePostAuthCodeMutation();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      return;
    }
    postAuthCode(code);
    setSearchParams({}, { replace: true });
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    if (authData?.token) {
      setToken(authData.token);
    }
  }, [authData]);

  useEffect(() => {
    if (user) {
      const timeout = setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [user]);

  return (
    <div className="max-w-sm w-full mx-auto">
      {authError && (
        <Card>
          <div className="flex flex-col items-center space-y-1">
            <div className="text-slate-200 font-semibold rounded text-center">
              Something went wrong...
            </div>
            <a
              href={authUrl?.authUrl}
              className="text-slate-400 hover:text-sky-300 roundIed text-center mx-auto"
            >
              Click here to try again
            </a>
          </div>
        </Card>
      )}
      {!authError && (
        <Card>
          {!user && !authError && (
            <div className="animate-pulse flex flex-col items-center space-y-4">
              <div className="rounded-full bg-zinc-700 h-16 w-16"></div>
              <div className="space-y-6 py-1 w-full">
                <div className="h-2 bg-zinc-700 rounded"></div>
                <div className="h-2 bg-zinc-700 rounded"></div>
              </div>
            </div>
          )}
          {user && (
            <div className="flex flex-col items-center space-y-4">
              <img
                className="rounded-full h-16 w-16"
                src={
                  user.avatarUrl ??
                  `https://cdn.discordapp.com/embed/avatars/index.png`
                }
              ></img>
              <div className="space-y-1 py-1 w-full">
                <div className="text-slate-200 font-semibold rounded text-center">
                  Hi, {user.displayName}
                </div>
                <div className="text-slate-400 rounded text-center">
                  Taking you to your dashboard...
                </div>
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};
