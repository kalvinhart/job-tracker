import { useJob } from "../../hooks/useJob/useJob";

import Spinner from "../../shared/Spinner/Spinner";
import JobView from "../../features/job-details/JobView/JobView";

const JobPage = () => {
  const { loading, currentJob, error } = useJob();

  if (loading) return <Spinner />;

  if (currentJob) {
    return <JobView currentJob={currentJob} />;
  } else {
    return null;
  }
};
export default JobPage;
