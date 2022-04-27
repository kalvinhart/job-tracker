import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showSidePanel: false,
    showAppointmentModal: false,
    showDeleteWarning: { deleteJob: false, deleteInterview: false },
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
    setShowAppointmentModal: (state, action) => {
      state.showAppointmentModal = action.payload;
    },
    setShowDeleteWarning: (state, action) => {
      state.showDeleteWarning = {
        ...state.showDeleteWarning,
        ...action.payload,
      };
    },
  },
});

export const {
  openSidePanel,
  closeSidePanel,
  enableEditing,
  setShowAppointmentModal,
  setShowDeleteWarning,
} = uiSlice.actions;

export default uiSlice.reducer;
