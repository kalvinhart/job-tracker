import { useJobSlice } from "../../../hooks/useJobSlice/useJobSlice";
import { useUi } from "../../../hooks/useUiSlice/useUiSlice";

type FormData = { interviewDate: string };

export const useAddAppointment = (reset: () => void) => {
  const { setShowAppointmentModal } = useUi();
  const { loading, currentJob, saveEditedJob, setCurrentJob } = useJobSlice();

  const onSubmit = (data: FormData) => {
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
    onSubmit: (data: FormData) => onSubmit(data),
    cancelForm: () => cancelForm(),
    setShowAppointmentModal: (option: boolean) => setShowAppointmentModal(option),
  };
};
