import { useJobPage } from "./useJobPage";

import Spinner from "../../common/components/Spinner/Spinner";
import JobView from "../../features/job-details/JobView/JobView";

const JobPage = () => {
  const { loading, jobToView, error, navigate } = useJobPage();

  if (error) navigate("/error");

  if (loading) return <Spinner />;

  if (jobToView) {
    return <JobView job={jobToView} />;
  } else {
    return null;
  }
};
export default JobPage;
