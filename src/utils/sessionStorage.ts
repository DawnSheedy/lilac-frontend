import { SessionStateType } from "../redux/slices/sessionSlice";

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as SessionStateType;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: SessionStateType) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
