import { useJobPage } from "./useJobPage";

import Spinner from "../../common/components/Spinner/Spinner";
import JobView from "../../features/job-details/JobView/JobView";

const JobPage = () => {
  const { loading, currentJob, error, navigate } = useJobPage();

  if (error) navigate("/error");

  if (loading) return <Spinner />;

  if (currentJob) {
    return <JobView currentJob={currentJob} />;
  } else {
    return null;
  }
};
export default JobPage;
