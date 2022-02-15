import { useEffect, useContext } from "react";
import { JobContext } from "../../context/jobContext";
import { useNavigate } from "react-router-dom";

import JobView from "./JobView/JobView";

const JobPage = () => {
  const { jobs, selectedJob, enableEditing, removeJob } = useContext(JobContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (jobs === null || jobs.length === 0) navigate("/");
  }, [jobs, navigate]);

  const {
    benefits,
    company,
    contactName,
    contactNumber,
    date,
    description,
    id,
    interview,
    location,
    salary,
    status,
    title,
  } = selectedJob;

  return (
    <JobView
      benefits={benefits}
      company={company}
      contactName={contactName}
      contactNumber={contactNumber}
      date={date}
      description={description}
      id={id}
      interview={interview}
      location={location}
      salary={salary}
      status={status}
      title={title}
      enableEditing={enableEditing}
      removeJob={removeJob}
    />
  );
};

export default JobPage;
