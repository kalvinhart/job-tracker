import { Job } from "../../common/types/job";

export interface IJobService {
  getJobs: (uid: string) => Promise<Job[]>;
  getJob: (id: string) => Promise<Job>;
  createJob: (data: Job) => Promise<Job>;
  updateJob: (id: string, data: Job) => Promise<Job>;
  updateField: (field: string, id: string, data: string | number) => Promise<Job>;
  deleteJob: (id: string) => Promise<void>;
  deleteMany: (ids: string[]) => Promise<void>;
  deleteInterview: (id: string) => Promise<string>;
}
