import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import navBarSlice from "./navBarSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    activeTab: navBarSlice,
  },
});
