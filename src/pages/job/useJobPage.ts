import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthentication } from "../../common/hooks/useAuthentication/useAuthentication";
import { useJobSlice } from "../../common/hooks/useJobSlice/useJobSlice";

export const useJobPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { loading, loadJobsComplete, loadAllJobs, loadJob, currentJob, error } =
    useJobSlice();

  const { user } = useAuthentication();

  useEffect(() => {
    if (currentJob?.id === params.id) return;

    if (user) {
      if (!loadJobsComplete && !loading) {
        loadAllJobs(user);
      }

      if (loadJobsComplete && params.id && !error && !loading) {
        loadJob(params.id);
      }
    }
  }, [
    loadJobsComplete,
    currentJob,
    loading,
    loadAllJobs,
    loadJob,
    user,
    error,
    params.id,
  ]);

  return {
    loading,
    currentJob,
    error,
    navigate,
  };
};
