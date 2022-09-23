import { useContext } from "react";
import { JobContext } from "../../../context/JobContext";

export const useJobContext = () => {
  const {
    clearJobState,
    currentJob,
    deleteManyJobs,
    deleteJobById,
    error,
    jobs,
    loadJob,
    loadJobsComplete,
    loading,
    saveEditedJob,
    saveNewJob,
    setCurrentJob,
    setError,
    setJobs,
    setLoadJobsComplete,
    setLoading,
  } = useContext(JobContext);

  return {
    clearJobState,
    currentJob,
    deleteManyJobs,
    deleteJobById,
    error,
    jobs,
    loadJob,
    loadJobsComplete,
    loading,
    saveEditedJob,
    saveNewJob,
    setCurrentJob,
    setError,
    setJobs,
    setLoadJobsComplete,
    setLoading,
  };
};
