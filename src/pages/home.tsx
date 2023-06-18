import { useUser } from "../hooks/useUser";
import { Card } from "../layout/Card";

export const Home = () => {
  const user = useUser();

  return (
    <Card>
      <h2 className="text-slate-100 font-semibold text-xl">
        {user ? `Hi, ${user.displayName}` : "Welcome"}
      </h2>
      {!user && <p className="text-slate-200">Sign in to continue to the Dashboard.</p>}
      {user && <p className="text-slate-200">You are signed in successfully.</p>}
    </Card>
  );
};
