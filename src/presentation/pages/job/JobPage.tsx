import { useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";
import { useJobSlice } from "../../hooks/useJobSlice/useJobSlice";

import Spinner from "../../components/Spinner/Spinner";
import JobView from "../../features/job-details/JobView/JobView";

const JobPage = () => {
  const { jobs, loading, loadAllJobs, loadJob, currentJob, navigate, params, error } =
    useJobSlice();

  const { user } = useAuthentication();

  useEffect(() => {
    if (currentJob) return;

    if (user) {
      if (!jobs && !loading) {
        loadAllJobs(user);
      }

      if (jobs && params.id && !currentJob && !error && !loading) {
        loadJob(params.id);
      }
    }
  }, [jobs, currentJob, loadAllJobs, loadJob, user]);

  if (error) navigate("/error");

  if (loading) return <Spinner />;

  if (currentJob) {
    return <JobView currentJob={currentJob} />;
  } else {
    return null;
  }
};
export default JobPage;
