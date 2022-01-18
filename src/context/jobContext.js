import { createContext, useState, useEffect, useRef, useCallback } from "react";

export const JobContext = createContext({
  show: false,
  setShow: () => {},
  editing: false,
  setEditing: () => {},
});

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState("");
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);

  const enableEditing = () => {
    setEditing(true);
    setShow(true);
  };

  const cancel = () => {
    setEditing(false);
    setShow(false);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        filteredJobs,
        setFilteredJobs,
        selectedJob,
        setSelectedJob,
        show,
        setShow,
        editing,
        enableEditing,
        cancel,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
