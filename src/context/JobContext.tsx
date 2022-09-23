import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useAuthentication } from "../common/hooks/useAuthentication/useAuthentication";
import { toastError, toastSuccess } from "../common/utilities/toast";

import FirebaseService from "../services/api/FirebaseService/FirebaseService";
import JobService from "../services/JobService/JobService";

import { Job } from "../common/types/job";

type JobContextType = {
  loading: boolean;
  loadJobsComplete: boolean;
  jobs: Job[];
  currentJob: Job | null;
  error: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setLoadJobsComplete: Dispatch<SetStateAction<boolean>>;
  setJobs: Dispatch<SetStateAction<Job[]>>;
  setCurrentJob: Dispatch<SetStateAction<Job | null>>;
  setError: Dispatch<SetStateAction<boolean>>;
  loadJob: (uid: string) => void;
  saveNewJob: (job: Job) => void;
  saveEditedJob: (id: string, job: Job) => void;
  deleteJobById: (id: string) => void;
  deleteManyJobs: (ids: string[]) => void;
  clearJobState: () => void;
};

const initialState: JobContextType = {
  loading: false,
  setLoading: () => {},
  loadJobsComplete: false,
  setLoadJobsComplete: () => {},
  jobs: [],
  setJobs: () => {},
  currentJob: null,
  setCurrentJob: () => {},
  error: false,
  setError: () => {},
  loadJob: async (uid: string) => {},
  saveNewJob: (job: Job) => {},
  saveEditedJob: (id: string, job: Job) => {},
  deleteJobById: (id: string) => {},
  deleteManyJobs: (ids: string[]) => {},
  clearJobState: () => {},
};

export const JobContext = createContext<JobContextType>(initialState);

type Props = {
  children: ReactNode;
};
const JobContextProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [loadJobsComplete, setLoadJobsComplete] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentJob, setCurrentJob] = useState<Job | null>(null);
  const [error, setError] = useState(false);

  const { user } = useAuthentication();

  const api = useMemo(() => new FirebaseService(), []);
  const jobService = useMemo(() => new JobService(api), [api]);

  const sortJobs = (jobs: Job[]): Job[] => {
    return jobs.sort((a, b) => +b.date - +a.date);
  };

  const handleUpdateJobList = (newJob: Job) => {
    setJobs((prev) => [
      ...prev.map((oldJob) => {
        if (oldJob.id === newJob.id) {
          return newJob;
        } else {
          return oldJob;
        }
      }),
    ]);
  };

  const handleJobRemoved = (id: string) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const handleJobsRemoved = (ids: string[]) => {
    setJobs((prev) => prev.filter((job) => !ids.includes(job.id!)));
  };

  const clearJobState = () => {
    setJobs([]);
    setLoadJobsComplete(false);
    setCurrentJob(null);
  };

  const loadAllJobs = useCallback(
    async (uid: string) => {
      try {
        setLoading(true);
        const jobs: Job[] = await jobService.getJobs(uid);
        sortJobs(jobs);
        setJobs(jobs);
        setLoadJobsComplete(true);
        setLoading(false);
      } catch (err: any) {
        console.log(err);
      }
    },
    [jobService]
  );

  const loadJob = useCallback(
    async (id: string) => {
      try {
        const job: Job = await jobService.getJob(id);
        setCurrentJob(job);
      } catch (err: any) {
        console.log(err);
      }
    },
    [jobService]
  );

  const saveNewJob = useCallback(
    async (data: Job) => {
      try {
        const newJob = await jobService.createJob(data);
        setJobs((prev) => [newJob, ...prev]);
        toastSuccess("Job successfully saved!");
        return newJob;
      } catch (err: any) {
        toastError("Unable to save.");
        console.log(err);
      }
    },
    [jobService]
  );

  const saveEditedJob = useCallback(
    async (id: string, data: Job) => {
      try {
        const editedJob = await jobService.updateJob(id, data);
        handleUpdateJobList(editedJob);
        toastSuccess("Job successfully updated!");
      } catch (err: any) {
        toastError("Unable to save.");
        console.log(err);
      }
    },
    [jobService]
  );

  const deleteJobById = useCallback(
    async (id: string) => {
      try {
        await jobService.deleteJob(id);
        toastSuccess("Job deleted!");
        handleJobRemoved(id);
      } catch (err: any) {
        toastError("Unable to delete.");
        console.log(err);
      }
    },
    [jobService]
  );

  const deleteManyJobs = useCallback(
    async (ids: string[]) => {
      try {
        await jobService.deleteMany(ids);
        toastSuccess("Jobs deleted!");
        handleJobsRemoved(ids);
      } catch (err: any) {
        toastError("Unable to delete.");
        console.log(err);
      }
    },
    [jobService]
  );

  useEffect(() => {
    if (!loadJobsComplete && !loading && user) {
      loadAllJobs(user);
    }
  }, [user, loading, loadJobsComplete, loadAllJobs]);

  return (
    <JobContext.Provider
      value={{
        clearJobState,
        currentJob,
        deleteJobById,
        deleteManyJobs,
        error,
        jobs,
        loading,
        loadJob,
        loadJobsComplete,
        saveEditedJob,
        saveNewJob,
        setCurrentJob,
        setError,
        setLoading,
        setJobs,
        setLoadJobsComplete,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
