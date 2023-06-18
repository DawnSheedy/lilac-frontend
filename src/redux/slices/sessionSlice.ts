import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { loadState } from "../../utils/sessionStorage";

// Define a type for the slice state
export interface SessionStateType {
  authToken: string | null;
}

// Define the initial state using that type
const initialState: SessionStateType = loadState() ?? {
  authToken: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
  },
});

export const { setToken } = sessionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.session.authToken

export default sessionSlice.reducer;
