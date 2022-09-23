import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";
import { useAuthentication } from "../../../common/hooks/useAuthentication/useAuthentication";

import { SubmitHandler } from "react-hook-form";
import { Job } from "../../../common/types/job";

type Props = {
  reset: () => void;
  close: () => void;
  editing: boolean | undefined;
  job: Job | undefined;
};
export const useForm = ({ reset, close, editing, job }: Props) => {
  const { loading, currentJob, saveEditedJob, saveNewJob } = useJobSlice();
  const { user } = useAuthentication();

  const statusOptions = ["Pending", "Interview", "Rejected", "Expired"];
  const resourceOptions = [
    "",
    "LinkedIn",
    "Indeed",
    "Reed",
    "Monster",
    "Glassdoor",
    "Adzuna",
    "CV-Library",
    "Totaljobs",
    "Guardian Jobs",
    "Other",
  ];

  const onSubmit: SubmitHandler<Job> = (data: Job) => {
    const newData = { ...data, user };

    if (editing) {
      saveEditedJob({ ...newData, id: job!.id });
    } else {
      saveNewJob(newData);
    }

    reset();
  };

  const cancelForm = () => {
    reset();
    close();
  };

  return {
    loading,
    currentJob,
    saveEditedJob,
    saveNewJob,
    user,
    statusOptions,
    resourceOptions,
    onSubmit,
    cancelForm,
  };
};
