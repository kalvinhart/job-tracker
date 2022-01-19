import { createContext, useState, useEffect } from "react";
import { fetchJobs } from "../utilities/firebase";
import toast, { Toaster } from "react-hot-toast";

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
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (jobs !== null) return;

    const retrieveJobs = async () => {
      const originalJobs = await fetchJobs();
      const newJobs = sanitiseDataForTable(originalJobs);
      setJobs(originalJobs);
      setFilteredJobs(newJobs);
    };

    retrieveJobs();
    setLoading(false);
  }, [fetchJobs]);

  const sanitiseDataForTable = (jobs) => {
    console.log(jobs);
    return jobs.map((job) => {
      return {
        ...job,
        date: job.date.toDate().toDateString(),
        salary: `£${job.salary}`,
      };
    });
  };

  const updateFilteredJobs = (data) => {
    const newJobs = sanitiseDataForTable(data);
    setFilteredJobs(newJobs);
  };

  const enableEditing = () => {
    setEditing(true);
    setShow(true);
  };

  const cancel = () => {
    setEditing(false);
    setShow(false);
  };

  const toastSuccess = (message) => {
    toast.success(message);
  };

  const toastError = (message) => {
    toast.error(message);
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
        updateFilteredJobs,
        show,
        setShow,
        loading,
        editing,
        setEditing,
        enableEditing,
        cancel,
        toastSuccess,
        toastError,
      }}
    >
      <Toaster position="bottom-right" />
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
