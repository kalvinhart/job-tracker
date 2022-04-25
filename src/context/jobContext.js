import { createContext, useState } from "react";
import {
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

  const updateTableJobs = (data) => {
    const newJobs = sanitiseDataForTable(data);
    setJobsForTable(newJobs);
  };

  const updateSelectedJob = (id, jobs) => {
    const newSelectedJob = jobs.filter((job) => job.id === id)[0];
    setSelectedJob(newSelectedJob);
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

  return (
    <JobContext.Provider
      value={{
        clearAllJobStates,
        jobs,
        jobsForTable,
        saveEdit,
        selectedJob,
        setJobs,
        setJobsForTable,
        setSelectedJob,
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
