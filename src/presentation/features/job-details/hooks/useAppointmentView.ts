import { useJobSlice } from "../../../hooks/useJobSlice/useJobSlice";

export const useAppointmentView = () => {
  const { currentJob, saveEditedJob } = useJobSlice();

  const { id, interview } = currentJob;

  const interviewDate = new Date(interview).toDateString() ?? null;
  const interviewTime = new Date(interview).toLocaleTimeString() ?? null;

  const removeInterview = async (): Promise<void> => {
    const newData = {
      ...currentJob,
      interview: "",
      status: "Pending",
    };

    saveEditedJob(newData);
  };

  return {
    id,
    interview,
    interviewDate,
    interviewTime,
    removeInterview: () => removeInterview(),
  };
};
