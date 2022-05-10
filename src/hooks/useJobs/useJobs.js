import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../useAuth/useAuth";

import { useJobSlice } from "../useJobSlice/useJobSlice";

export const useJobs = () => {
  const { loading, jobs, jobsForTable, error, loadAllJobs, setCurrentJob } =
    useJobSlice();

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!jobs && !loading && user) {
      loadAllJobs(user);
    }
  }, [jobs, loadAllJobs, user]);

  const viewJob = (id) => {
    setCurrentJob(jobs.filter((job) => job.id === id)[0]);
    navigate(`/job/${id}`);
  };

  return {
    loading,
    jobs,
    jobsForTable,
    error,
    viewJob,
  };
};
