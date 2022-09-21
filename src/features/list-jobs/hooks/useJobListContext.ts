import { useContext } from "react";
import { JobListContext } from "../context/JobListContext";

export const useJobListContext = () => {
  const { selectedJobs, handleSelectJob, cancelSelection } = useContext(JobListContext);

  return {
    selectedJobs,
    handleSelectJob,
    cancelSelection,
  };
};
