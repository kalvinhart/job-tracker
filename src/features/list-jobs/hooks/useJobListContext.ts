import { useContext } from "react";
import { JobListContext } from "../context/JobListContext";

export const useJobListContext = () => {
  const {
    selectedJobs,
    handleSelectJob,
    handleJobDeselect,
    cancelSelection,
    showJobForm,
    handleOpenJobForm,
    handleCloseJobForm,
  } = useContext(JobListContext);

  return {
    selectedJobs,
    handleSelectJob,
    handleJobDeselect,
    cancelSelection,
    showJobForm,
    handleOpenJobForm,
    handleCloseJobForm,
  };
};
