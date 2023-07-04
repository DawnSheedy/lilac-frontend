import { useAppSelector } from "../redux/hooks";
import { selectCurrentServer } from "../redux/slices/interfaceSlice";

export const useCurrentServer = () => {
  const currentServer = useAppSelector(selectCurrentServer);

  return currentServer;
};
