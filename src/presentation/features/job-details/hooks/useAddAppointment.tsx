import { Job } from "../../../../domain/entities/job";
import { useJobSlice } from "../../../hooks/useJobSlice/useJobSlice";
import { useUiSlice } from "../../../hooks/useUiSlice/useUiSlice";

type FormData = { interviewDate: string };

export const useAddAppointment = (reset: () => void) => {
  const { setShowAppointmentModal } = useUiSlice();
  const { loading, currentJob, saveEditedJob, setCurrentJob } = useJobSlice();

  const onSubmit = (data: FormData) => {
    const newData = {
      ...currentJob,
      interview: new Date(data.interviewDate).getTime(),
      status: "Interview",
    };

    saveEditedJob(newData as Job);
    setCurrentJob(newData as Job);
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
