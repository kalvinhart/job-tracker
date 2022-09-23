import { Job } from "../../../common/types/job";
import { useJobContext } from "../../../common/hooks/useJobContext/useJobContext";

type FormData = { interviewDate: string };

type Props = {
  job: Job;
  reset: () => void;
  close: () => void;
};
export const useAddAppointment = ({ job, reset, close }: Props) => {
  const { loading, saveEditedJob } = useJobContext();

  const onSubmit = (data: FormData) => {
    const newData = {
      ...job,
      interview: new Date(data.interviewDate).getTime(),
      status: "Interview",
    };

    saveEditedJob(job.id!, newData as Job);
    close();
  };

  const cancelForm = () => {
    reset();
    close();
  };

  return {
    loading,
    onSubmit: (data: FormData) => onSubmit(data),
    cancelForm: () => cancelForm(),
  };
};
