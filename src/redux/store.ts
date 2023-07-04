import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import sessionSlice from "./slices/sessionSlice";
import { saveState } from "../utils/sessionStorage";
import { serversApi } from "./api/serversApi";
import interfaceSlice from "./slices/interfaceSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [serversApi.reducerPath]: serversApi.reducer,
    session: sessionSlice,
    interface: interfaceSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, serversApi.middleware),
});

setupListeners(store.dispatch);

store.subscribe(() => {
  saveState(store.getState().session);
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
