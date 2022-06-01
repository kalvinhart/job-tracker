import { useJobSlice } from "../../../hooks/useJobSlice/useJobSlice";
import { useUi } from "../../../hooks/useUiSlice/useUiSlice";

export const useAddAppointment = (reset) => {
  const { setShowAppointmentModal } = useUi();
  const { loading, currentJob, saveEditedJob, setCurrentJob } = useJobSlice();

  const onSubmit = (data) => {
    const newData = {
      ...currentJob,
      interview: new Date(data.interviewDate).getTime(),
      status: "Interview",
    };

    saveEditedJob(newData);
    setCurrentJob(newData);
  };

  const cancelForm = () => {
    reset();
    setShowAppointmentModal(false);
  };

  return {
    loading,
    onSubmit: (data) => onSubmit(data),
    cancelForm: () => cancelForm(),
    setShowAppointmentModal: (option) => setShowAppointmentModal(option),
  };
};
