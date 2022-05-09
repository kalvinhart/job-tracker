import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../useAuth/useAuth";

import { loadAllJobs, loadJob, deleteJobById } from "../../slices/jobSlice";
import { useParams } from "react-router";

export const useJob = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();
  const { loading, jobs, currentJob, error } = useSelector((state) => state.job);

  const params = useParams();

  useEffect(() => {
    if (currentJob) return;

    if (user) {
      if (!jobs) {
        return dispatch(loadAllJobs(user));
      }

      if (jobs && !currentJob) {
        return dispatch(loadJob(params.id));
      }
    }
  }, [jobs, currentJob, dispatch, loadAllJobs, loadJob, user]);

  return {
    loading,
    currentJob,
    error,
    deleteJobById: (id) => dispatch(deleteJobById(id)),
  };
};
