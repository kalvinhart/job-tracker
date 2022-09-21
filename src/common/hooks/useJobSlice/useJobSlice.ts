import { useNavigate, useParams } from "react-router";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import { setCurrentJob, clearJobState } from "../../../store/slices/jobSlice";
import {
  loadAllJobs,
  loadJob,
  saveNewJob,
  saveEditedJob,
  deleteJobById,
  deleteManyJobs,
} from "../../../store/slices/thunks/jobThunks";
import { Job } from "../../types/job";

export const useJobSlice = () => {
  const dispatch = useAppDispatch();
  const { loading, jobs, jobsForTable, currentJob, error } = useAppSelector(
    (state) => state.job
  );

  const navigate = useNavigate();
  const params = useParams();

  const viewJob = (id: string) => {
    const newCurrentJob = jobs!.filter((job) => job.id === id)[0];
    dispatch(setCurrentJob(newCurrentJob));
    navigate(`/job/${id}`);
  };

  return {
    loading,
    jobs,
    jobsForTable,
    currentJob,
    error,
    viewJob,
    params,
    navigate,
    setCurrentJob: (job: Job) => dispatch(setCurrentJob(job)),
    clearJobState: () => dispatch(clearJobState()),
    loadAllJobs: (userId: string) => dispatch(loadAllJobs(userId)),
    loadJob: (id: string) => dispatch(loadJob(id)),
    saveNewJob: (data: Job) => dispatch(saveNewJob(data)),
    saveEditedJob: (data: Job) => dispatch(saveEditedJob(data)),
    deleteJobById: (id: string) => dispatch(deleteJobById(id)),
    deleteManyJobs: (ids: string[]) => dispatch(deleteManyJobs(ids)),
  };
};
