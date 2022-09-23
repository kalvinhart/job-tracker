import { createSlice } from "@reduxjs/toolkit";

type UIState = {
  showAppointmentModal: boolean;
  showDeleteWarning: {
    deleteJob: boolean;
    deleteInterview: boolean;
  };
  editing: boolean;
};

const initialState: UIState = {
  showAppointmentModal: false,
  showDeleteWarning: { deleteJob: false, deleteInterview: false },
  editing: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
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

export const { enableEditing, setShowAppointmentModal, setShowDeleteWarning } =
  uiSlice.actions;

export default uiSlice.reducer;
