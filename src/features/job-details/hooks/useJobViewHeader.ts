import { useState } from "react";
import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";
import { useUiSlice } from "../../../common/hooks/useUiSlice/useUiSlice";
import { Job } from "../../../common/types/job";

export const useJobViewHeader = (currentJob: Job) => {
  const [showJobForm, setShowJobForm] = useState(false);

  const {
    showDeleteWarning: { deleteJob },
    setShowDeleteWarning,
  } = useUiSlice();

  const { deleteJobById } = useJobSlice();

  const actionDeleteJob = async (): Promise<void> => {
    await deleteJobById(currentJob.id!);
  };

  return {
    deleteJob,
    setShowDeleteWarning,
    actionDeleteJob,
    showJobForm,
    setShowJobForm,
  };
};
