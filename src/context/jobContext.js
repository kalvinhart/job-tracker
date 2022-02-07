import { createContext, useState, useEffect } from "react";
import {
  fetchJobs,
  saveJob,
  deleteJob,
  saveUpdate,
  updateInterview,
  deleteInterview,
} from "../utilities/firebase";
import { sanitiseData, sanitiseDataForTable } from "../utilities/sanitise";
import toast, { Toaster } from "react-hot-toast";

export const JobContext = createContext({
  show: false,
  setShow: () => {},
  editing: false,
  setEditing: () => {},
});

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(null);
  const [jobsForTable, setJobsForTable] = useState([]);
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
      const tableJobs = sanitiseDataForTable(originalJobs);
      setJobs(originalJobs);
      setJobsForTable(tableJobs);
      setLoading(false);
    };

    retrieveJobs();
  }, [fetchJobs]);

  const updateTableJobs = (data) => {
    const newJobs = sanitiseDataForTable(data);
    setJobsForTable(newJobs);
  };

  const updateSelectedJob = (id, jobs) => {
    const newSelectedJob = jobs.filter((job) => job.id === id)[0];
    console.log("newSelectedJob: ", newSelectedJob);
    setSelectedJob(newSelectedJob);
  };

  const saveNewJob = async (data) => {
    try {
      const newData = await saveJob(data);
      const newJobs = [...jobs, newData];
      toastSuccess("Job successfully saved!");
      setJobs(newJobs);
      updateTableJobs(newJobs);
    } catch (e) {
      console.log(e);
      toastError("Something went wrong.");
    }
  };

  const saveEdit = async (id, data) => {
    const updatedData = {
      ...data,
      id,
    };
    try {
      const newData = await saveUpdate(updatedData);
      const newJobs = jobs.map((job) => (job.id === id ? newData : job));
      updateAllJobStates(id, newJobs);
      toastSuccess("Job successfully updated!");
    } catch (e) {
      console.log(e);
      toastError("Something went wrong.");
    }
  };

  const removeJob = async (id) => {
    try {
      await deleteJob(id);
      const newJobs = jobs.filter((job) => job.id !== id);
      setJobs(newJobs);
      updateTableJobs(newJobs);
      toastSuccess("Job successfully deleted!");
    } catch (e) {
      console.log(e.message);
      toastError("Something went wrong!");
    }
  };

  const updateInterviewDate = async (id, data) => {
    console.log(id, data);
    try {
      const interviewDate = await updateInterview(id, data);
      const newJobs = jobs.map((job) =>
        job.id === id ? { ...job, interview: interviewDate, status: "Interview" } : job
      );
      updateAllJobStates(id, newJobs);
      toastSuccess("Interview successfully updated!");
    } catch (e) {
      console.log(e.message);
      toastError("Something went wrong!");
    }
  };

  const removeInterview = async (id) => {
    try {
      const interviewDate = await deleteInterview(id);
      const newJobs = jobs.map((job) =>
        job.id === id ? { ...job, interview: interviewDate, status: "Pending" } : job
      );
      updateAllJobStates(id, newJobs);
      toastSuccess("Interview successfully deleted!");
    } catch (e) {
      console.log(e.message);
      toastError("Something went wrong!");
    }
  };

  const updateAllJobStates = (id, newJobs) => {
    setJobs(newJobs);
    updateTableJobs(newJobs);
    updateSelectedJob(id, newJobs);
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
        jobsForTable,
        setJobsForTable,
        selectedJob,
        setSelectedJob,
        updateTableJobs,
        saveNewJob,
        removeJob,
        saveEdit,
        updateInterviewDate,
        removeInterview,
        updateSelectedJob,
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
