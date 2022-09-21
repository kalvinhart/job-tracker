import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import { setCurrentJob } from "../../../store/slices/jobSlice";
import {
  openSidePanel,
  closeSidePanel,
  enableEditing,
  setShowAppointmentModal,
  setShowDeleteWarning,
} from "../../../store/slices/uiSlice";
import { Job } from "../../types/job";

export const useUiSlice = () => {
  const dispatch = useAppDispatch();

  const { editing, showSidePanel, showAppointmentModal, showDeleteWarning } =
    useAppSelector((state) => state.ui);

  const openAndEdit = (job: Job) => {
    dispatch(setCurrentJob(job));
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
