import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useJobContext } from "../../common/hooks/useJobContext/useJobContext";
import { Job } from "../../common/types/job";

export const useJobPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { loading, jobs, loadJobsComplete, error } = useJobContext();

  const [jobToView, setJobToView] = useState<Job>(null!);

  useEffect(() => {
    if (!loadJobsComplete) return;

    const foundJob =
      jobs.length > 0 ? jobs.filter((job) => job.id === params.id)[0] : null;

    if (foundJob) {
      setJobToView(foundJob);
    } else {
      navigate("/error");
    }
  }, [loadJobsComplete, jobs, params.id, navigate]);

  return {
    loading,
    jobToView,
    error,
    navigate,
  };
};
