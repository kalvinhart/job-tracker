import { useState } from "react";
import { useJobContext } from "../../../common/hooks/useJobContext/useJobContext";
import { Job } from "../../../common/types/job";

export const useJobViewHeader = (currentJob: Job) => {
  const [showJobForm, setShowJobForm] = useState(false);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);

  const { deleteJobById } = useJobContext();

  const actionDeleteJob = async (): Promise<void> => {
    await deleteJobById(currentJob.id!);
  };

  return {
    actionDeleteJob,
    setShowDeleteWarning,
    setShowJobForm,
    showDeleteWarning,
    showJobForm,
  };
};
