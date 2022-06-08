import { useDispatch, useSelector } from "react-redux";
import {
  openSidePanel,
  closeSidePanel,
  enableEditing,
  setShowAppointmentModal,
  setShowDeleteWarning,
} from "../../../application/slices/uiSlice";

export const useUiSlice = () => {
  const dispatch = useDispatch();

  const { editing, showSidePanel, showAppointmentModal, showDeleteWarning } = useSelector(
    (state) => state.ui
  );

  const openAndEdit = () => {
    dispatch(enableEditing());
    dispatch(openSidePanel());
  };

  return {
    editing,
    showSidePanel,
    openSidePanel: () => dispatch(openSidePanel()),
    closeSidePanel: () => dispatch(closeSidePanel()),
    enableEditing: () => dispatch(enableEditing()),
    showAppointmentModal,
    setShowAppointmentModal: (option) => dispatch(setShowAppointmentModal(option)),
    showDeleteWarning,
    setShowDeleteWarning: (options) => dispatch(setShowDeleteWarning(options)),
    openAndEdit,
  };
};
