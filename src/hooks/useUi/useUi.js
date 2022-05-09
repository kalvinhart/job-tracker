import { useDispatch, useSelector } from "react-redux";

export const useUi = (options) => {
  const dispatch = useDispatch();

  const {
    openSidePanel,
    closeSidePanel,
    enableEditing,
    setShowAppointmentModal,
    setShowDeleteWarning,
  } = useSelector((state) => state.ui);

  return {
    openSidePanel: dispatch(openSidePanel()),
    closeSidePanel: dispatch(closeSidePanel()),
    enableEditing: dispatch(enableEditing()),
    setShowAppointmentModal: dispatch(setShowAppointmentModal()),
    setShowDeleteWarning: dispatch(setShowDeleteWarning(options)),
  };
};
