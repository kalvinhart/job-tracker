import { createContext, useState, useEffect } from "react";
import { fetchJobs, deleteJob } from "../utilities/firebase";
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
    if (jobs !== null) {
      setLoading(false);
      return;
    }

    const retrieveJobs = async () => {
      const originalJobs = await fetchJobs();
      const newJobs = sanitiseDataForTable(originalJobs);
      setJobs(originalJobs);
      setFilteredJobs(newJobs);
      setLoading(false);
    };

    retrieveJobs();
  }, [fetchJobs]);

  const sanitiseDataForTable = (jobs) => {
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

  const removeJob = async (id) => {
    try {
      await deleteJob(id);
      const newJobs = jobs.filter((job) => job.id !== id);
      setJobs(newJobs);
      updateFilteredJobs(newJobs);
      toastSuccess("Job successfully deleted!");
    } catch (e) {
      console.log(e.message);
      toastError("Something went wrong!");
    }
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
        removeJob,
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
