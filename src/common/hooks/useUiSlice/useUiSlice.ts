import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import {
  openSidePanel,
  closeSidePanel,
  enableEditing,
  setShowAppointmentModal,
  setShowDeleteWarning,
} from "../../../store/slices/uiSlice";

export const useUiSlice = () => {
  const dispatch = useAppDispatch();

  const { editing, showSidePanel, showAppointmentModal, showDeleteWarning } =
    useAppSelector((state) => state.ui);

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
    setShowAppointmentModal: (option: boolean) =>
      dispatch(setShowAppointmentModal(option)),
    showDeleteWarning,
    setShowDeleteWarning: (options: { deleteJob?: boolean; deleteInterview?: boolean }) =>
      dispatch(setShowDeleteWarning(options)),
    openAndEdit,
  };
};
