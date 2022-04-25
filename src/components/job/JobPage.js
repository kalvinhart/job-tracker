import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import JobView from "./JobView/JobView";

const JobPage = () => {
  const navigate = useNavigate();

  const { currentJob } = useSelector((state) => state.job);

  useEffect(() => {
    if (!currentJob) {
      return navigate("/");
    }
  }, [currentJob]);

  return currentJob && <JobView currentJob={currentJob} />;
};
export default JobPage;
