import { useDispatch, useSelector } from "react-redux";
import { setCurrentJob, clearJobState } from "../../../application/slices/jobSlice";
import {
  loadAllJobs,
  loadJob,
  saveNewJob,
  saveEditedJob,
  deleteJobById,
} from "../../../application/slices/thunks/jobThunks";

export const useJobSlice = () => {
  const dispatch = useDispatch();
  const { loading, jobs, jobsForTable, currentJob, error } = useSelector(
    (state) => state.job
  );

  return {
    loading,
    jobs,
    jobsForTable,
    currentJob,
    error,
    setCurrentJob: (job) => dispatch(setCurrentJob(job)),
    clearJobState: () => dispatch(clearJobState()),
    loadAllJobs: (userId) => dispatch(loadAllJobs(userId)),
    loadJob: (id) => dispatch(loadJob(id)),
    saveNewJob: (data) => dispatch(saveNewJob(data)),
    saveEditedJob: (data) => dispatch(saveEditedJob(data)),
    deleteJobById: (id) => dispatch(deleteJobById(id)),
  };
};
