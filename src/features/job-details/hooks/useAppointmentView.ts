import { Job } from "../../../common/types/job";
import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";

export const useAppointmentView = () => {
  const { currentJob, saveEditedJob } = useJobSlice();

  const { id, interview } = currentJob as Job;

  const interviewDate: string | null = new Date(interview!).toDateString() ?? null;
  const interviewTime: string | null = new Date(interview!).toLocaleTimeString() ?? null;

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
    interviewTime,
    removeInterview: () => removeInterview(),
  };
};
