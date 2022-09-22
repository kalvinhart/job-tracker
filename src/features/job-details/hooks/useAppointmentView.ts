import { Job } from "../../../common/types/job";
import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";
import { useUiSlice } from "../../../common/hooks/useUiSlice/useUiSlice";

export const useAppointmentView = () => {
  const { currentJob, saveEditedJob } = useJobSlice();
  const {
    showAppointmentModal,
    setShowAppointmentModal,
    showDeleteWarning: { deleteInterview },
    setShowDeleteWarning,
  } = useUiSlice();

  const { id, interview } = currentJob as Job;

  const interviewDate: string | null = new Date(interview!).toDateString() ?? null;

  const removeInterview = async (): Promise<void> => {
    const newData = {
      ...currentJob,
      interview: "",
      status: "Pending",
    };

    saveEditedJob(newData as Job);
  };

  return {
    id,
    interview,
    interviewDate,
    showAppointmentModal,
    setShowAppointmentModal,
    showDeleteInterview: deleteInterview,
    setShowDeleteWarning,
    removeInterview: () => removeInterview(),
  };
};
