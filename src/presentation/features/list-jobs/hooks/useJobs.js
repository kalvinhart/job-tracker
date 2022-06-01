import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../application/context/authContext";

import { useJobSlice } from "../../../hooks/useJobSlice/useJobSlice";

export const useJobs = () => {
  const { loading, jobs, jobsForTable, error, loadAllJobs, setCurrentJob } =
    useJobSlice();

  const { user } = useContext(AuthContext);

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
