import { useNavigate } from "react-router-dom";
import { Button } from "../components/atomic/Button";
import { AuthView } from "../components/auth/AuthView";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed z-10 top-0 left-0 right-0 border-b border-pink-800 bg-zinc-950/25 backdrop-blur-lg overflow-hidden">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <button className="font-semibold text-xl" onClick={() => navigate('/')}>
            Lilac Utils
          </button>
        </div>
        <div>
            <AuthView />
        </div>
      </div>
    </header>
  );
};
