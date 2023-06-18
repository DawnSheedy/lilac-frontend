import { useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setToken } from "../redux/slices/sessionSlice";
import { authApi } from "../redux/api/authApi";

export const useSetToken = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (token: string) => {
      dispatch(setToken(token));
      dispatch(authApi.util.invalidateTags([{ id: "MAIN", type: "User" }]));
    },
    [dispatch]
  );
};
