import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DiscordServer } from "../../types/DiscordServer";
import { RootState } from "../store";

export interface InterfaceStateType {
  currentServer: DiscordServer | null;
}

const initialState: InterfaceStateType = {
  currentServer: null,
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    setCurrentServer: (state, action: PayloadAction<DiscordServer>) => {
      state.currentServer = action.payload;
    },
  },
});

export const { setCurrentServer } = interfaceSlice.actions;

export const selectCurrentServer = (state: RootState) =>
  state.interface.currentServer;

export default interfaceSlice.reducer;
