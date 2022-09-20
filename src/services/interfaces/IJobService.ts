import { Job } from "../../common/types/job";

export interface IJobService {
  getJobs: (uid: string) => Promise<Job[]>;
  getJob: (id: string) => Promise<Job | boolean>;
  createJob: (data: Job) => Promise<Job>;
  updateJob: (data: Job) => Promise<Job>;
  deleteJob: (id: string) => Promise<void>;
  deleteInterview: (id: string) => Promise<string>;
}
