import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showSidePanel: false,
    editing: false,
  },
  reducers: {
    openSidePanel: (state) => {
      state.showSidePanel = true;
    },
    closeSidePanel: (state) => {
      state.showSidePanel = false;
      state.editing = false;
    },
    enableEditing: (state) => {
      state.editing = true;
    },
  },
});

export const { openSidePanel, closeSidePanel, enableEditing } = uiSlice.actions;

export default uiSlice.reducer;
