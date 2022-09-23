import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import {
  enableEditing,
  setShowAppointmentModal,
  setShowDeleteWarning,
} from "../../../store/slices/uiSlice";

export const useUiSlice = () => {
  const dispatch = useAppDispatch();

  const { editing, showAppointmentModal, showDeleteWarning } = useAppSelector(
    (state) => state.ui
  );

  return {
    editing,
    enableEditing: () => dispatch(enableEditing()),
    showAppointmentModal,
    setShowAppointmentModal: (option: boolean) =>
      dispatch(setShowAppointmentModal(option)),
    showDeleteWarning,
    setShowDeleteWarning: (options: { deleteJob?: boolean; deleteInterview?: boolean }) =>
      dispatch(setShowDeleteWarning(options)),
  };
};
