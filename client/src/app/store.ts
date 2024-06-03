import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import channelReducer from "./features/channel/channelSclice";

export const store = configureStore({
  reducer: { user: userReducer, channels: channelReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
