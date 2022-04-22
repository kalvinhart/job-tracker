import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showSidePanel: false,
  },
  reducers: {
    toggleSidePanel: (state) => {
      state.showSidePanel = !state.showSidePanel;
    },
  },
});

export const { toggleSidePanel } = uiSlice.actions;

export default uiSlice.reducer;
