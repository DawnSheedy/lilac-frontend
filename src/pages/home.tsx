import { useNavigate } from "react-router-dom";
import { Button } from "../components/atomic/Button";
import { useUser } from "../hooks/useUser";
import { Card } from "../layout/Card";

export const Home = () => {
  const user = useUser();
  const navigate = useNavigate()

  return (
    <Card>
      <h2 className="text-slate-100 font-semibold text-xl">
        {user ? `Hi, ${user.displayName}` : "Welcome"}
      </h2>
      {!user && <p className="text-slate-200">Sign in to continue to the Dashboard.</p>}
      {user && <p className="text-slate-200 mb-2">You are signed in successfully.</p>}
      {user && <Button label="Go to Dashboard" onClick={() => navigate('/dashboard')}></Button>}
    </Card>
  );
};
