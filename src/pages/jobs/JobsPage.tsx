import { useEffect } from "react";
import { useJobSlice } from "../../common/hooks/useJobSlice/useJobSlice";

import NoData from "../../features/list-jobs/components/NoData/NoData";
import Spinner from "../../common/components/Spinner/Spinner";
import { useAuthentication } from "../../common/hooks/useAuthentication/useAuthentication";
import { JobList } from "../../features/list-jobs/components/JobList";
import JobListProvider from "../../features/list-jobs/context/JobListContext";

const JobsPage = () => {
  const { loading, loadJobsComplete, jobs, loadAllJobs } = useJobSlice();

  const { user } = useAuthentication();

  useEffect(() => {
    if (!loadJobsComplete && !loading && user) {
      loadAllJobs(user);
    }
  }, [loading, loadJobsComplete, loadAllJobs, user]);

  if (loading) return <Spinner />;

  return (
    <>
      {loadJobsComplete && jobs.length === 0 ? (
        <NoData />
      ) : (
        <JobListProvider>
          <JobList />
        </JobListProvider>
      )}
    </>
  );
};

export default JobsPage;
