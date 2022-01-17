import { createContext, useState, useEffect, useRef, useCallback } from "react";

export const JobContext = createContext({
  show: false,
  setShow: () => {},
  editing: false,
  setEditing: () => {},
});

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);

  //   const loadedRef = useRef(false);

  //   useEffect(() => {
  //     if (loadedRef.current) return;

  //     const retrieveJobs = async () => {
  //       const originalJobs = await fetchJobs();
  //       const newJobs = filterJobs(originalJobs);
  //       setJobs(originalJobs);
  //       setFilteredJobs(newJobs);
  //     };

  //     retrieveJobs();

  //     loadedRef.current = true;
  //     setLoading(false);
  //   }, [fetchJobs]);

  //   const filterJobs = (jobs) => {
  //     return jobs.map((job) => {
  //       return {
  //         ...job,
  //         date: new Date(job.date.seconds).toDateString(),
  //         salary: job.salary.toString(),
  //       };
  //     });
  //   };

  const enableEditing = () => {
    setEditing(true);
    setShow(true);
  };

  const cancel = () => {
    setShow(false);
    setEditing(false);
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
