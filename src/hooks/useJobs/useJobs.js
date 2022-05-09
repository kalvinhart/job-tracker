import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../useAuth/useAuth";

import { loadAllJobs, setCurrentJob } from "../../slices/jobSlice";

export const useJobs = () => {
  const dispatch = useDispatch();
  const { loading, jobs, jobsForTable, error } = useSelector((state) => state.job);

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("useJobs useEffect jobs: ", jobs);
    console.log("useJobs useEffect user: ", user);
    if (!jobs && user) {
      dispatch(loadAllJobs(user));
    }
  }, [jobs, dispatch, loadAllJobs, user]);

  const viewJob = (id) => {
    dispatch(setCurrentJob(jobs.filter((job) => job.id === id)[0]));
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
