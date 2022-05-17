import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 0,
};

export const navBarSlice = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = navBarSlice.actions;

export default navBarSlice.reducer;
