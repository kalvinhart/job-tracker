import { useAuthentication } from "../../../common/hooks/useAuthentication/useAuthentication";
import { useJobContext } from "../../../common/hooks/useJobContext/useJobContext";

import { SubmitHandler } from "react-hook-form";
import { Job } from "../../../common/types/job";

type Props = {
  reset: () => void;
  close: () => void;
  editing: boolean | undefined;
  job: Job | undefined;
};
export const useForm = ({ reset, close, editing, job }: Props) => {
  const { loading, saveEditedJob, saveNewJob } = useJobContext();
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
      saveEditedJob(job!.id!, { ...newData, id: job!.id });
    } else {
      saveNewJob(newData);
    }

    reset();
    close();
  };

  const cancelForm = () => {
    reset();
    close();
  };

  return {
    loading,
    saveEditedJob,
    saveNewJob,
    user,
    statusOptions,
    resourceOptions,
    onSubmit,
    cancelForm,
  };
};
