import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useAuth } from "../shared/useAuth/useAuth";
import { useJobSlice } from "../useJobSlice/useJobSlice";

export const useJob = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();
  const { loading, jobs, currentJob, error, loadAllJobs, loadJob, deleteJobById } =
    useJobSlice();

  const params = useParams();

  useEffect(() => {
    if (currentJob) return;

    if (user) {
      if (!jobs && !loading) {
        return loadAllJobs(user);
      }

      if (jobs && params.id && !currentJob && !error && !loading) {
        return loadJob(params.id);
      }
    }
  }, [jobs, currentJob, dispatch, loadAllJobs, loadJob, user]);

  return {
    loading,
    currentJob,
    error,
    deleteJobById: (id) => deleteJobById(id),
  };
};
