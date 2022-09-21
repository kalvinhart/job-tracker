import { createSlice } from "@reduxjs/toolkit";

type UIState = {
  showSidePanel: boolean;
  showAppointmentModal: boolean;
  showDeleteWarning: {
    deleteJob: boolean;
    deleteInterview: boolean;
  };
  editing: boolean;
};

const initialState: UIState = {
  showSidePanel: false,
  showAppointmentModal: false,
  showDeleteWarning: { deleteJob: false, deleteInterview: false },
  editing: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
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
