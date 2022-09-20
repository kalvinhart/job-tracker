import { Job } from "../../domain/entities/job";
import { JobResponse } from "../types/Response";

export interface JobRequest {
  token: string;
  method: string;
  url: string;
  data?: Job;
}
export interface IJobService {
  getJobs: (token: string) => Promise<JobResponse>;
  getJob: (token: string, id: string) => Promise<JobResponse>;
  createJob: (token: string, data: Job) => Promise<JobResponse>;
  updateJob: (token: string, data: Job) => Promise<JobResponse>;
  deleteJob: (token: string, id: string) => Promise<JobResponse>;
  deleteInterview: (token: string, id: string) => Promise<JobResponse>;
}
