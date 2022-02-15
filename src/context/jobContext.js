import { createContext, useState } from "react";
import {
  fetchJobs,
  saveJob,
  deleteJob,
  saveUpdate,
  updateInterview,
  deleteInterview,
} from "../utilities/firebase";
import { sanitiseDataForTable } from "../utilities/sanitise";
import { Toaster } from "react-hot-toast";
import { toastSuccess, toastError } from "../utilities/toast";

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
  const [editing, setEditing] = useState(false);

  const getJobs = async (uid) => {
    const originalJobs = await fetchJobs(uid);
    const tableJobs = sanitiseDataForTable(originalJobs);
    setJobs(originalJobs);
    setJobsForTable(tableJobs);
  };

  const updateTableJobs = (data) => {
    const newJobs = sanitiseDataForTable(data);
    setJobsForTable(newJobs);
  };

  const updateSelectedJob = (id, jobs) => {
    const newSelectedJob = jobs.filter((job) => job.id === id)[0];
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
      toastError("Something went wrong!");
    }
  };

  const updateInterviewDate = async (id, data) => {
    try {
      const interviewDate = await updateInterview(id, data);
      const newJobs = jobs.map((job) =>
        job.id === id ? { ...job, interview: interviewDate, status: "Interview" } : job
      );
      updateAllJobStates(id, newJobs);
      toastSuccess("Interview successfully updated!");
      return { error: false };
    } catch (e) {
      toastError("Something went wrong!");
      return { error: true };
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
      toastError("Something went wrong!");
    }
  };

  const updateAllJobStates = (id, newJobs) => {
    setJobs(newJobs);
    updateTableJobs(newJobs);
    updateSelectedJob(id, newJobs);
  };

  const clearAllJobStates = () => {
    setJobs(null);
    setJobsForTable([]);
    setSelectedJob("");
  };

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
        cancel,
        clearAllJobStates,
        editing,
        enableEditing,
        getJobs,
        jobs,
        jobsForTable,
        saveEdit,
        saveNewJob,
        selectedJob,
        setEditing,
        setJobs,
        setJobsForTable,
        setSelectedJob,
        setShow,
        show,
        removeJob,
        removeInterview,
        updateInterviewDate,
        updateSelectedJob,
        updateTableJobs,
      }}
    >
      <Toaster position="bottom-right" />
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
