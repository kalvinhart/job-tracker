import NoData from "../../features/list-jobs/components/NoData/NoData";
import Spinner from "../../common/components/Spinner/Spinner";
import { JobList } from "../../features/list-jobs/components/JobList";
import JobListProvider from "../../features/list-jobs/context/JobListContext";
import { useJobContext } from "../../common/hooks/useJobContext/useJobContext";

const JobsPage = () => {
  const { loading, loadJobsComplete, jobs } = useJobContext();

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
