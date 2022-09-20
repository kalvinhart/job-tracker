import { Job } from "../../../domain/entities/job";
import { IJobService } from "../../interfaces/IJobService";
import { JobResponse } from "../../types/Response";

export default class JobService implements IJobService {
  api: IJobService;

  constructor(api: IJobService) {
    this.api = api;
  }

  async getJobs(token: string): Promise<JobResponse> {
    return await this.api.getJobs(token);
  }

  async getJob(token: string, id: string): Promise<JobResponse> {
    return await this.api.getJob(token, id);
  }

  async createJob(token: string, data: Job): Promise<JobResponse> {
    return await this.api.createJob(token, data);
  }

  async updateJob(token: string, data: Job): Promise<JobResponse> {
    return await this.api.updateJob(token, data);
  }

  async deleteJob(token: string, id: string): Promise<JobResponse> {
    return await this.api.deleteJob(token, id);
  }

  async deleteInterview(token: string, id: string): Promise<JobResponse> {
    return await this.api.deleteInterview(token, id);
  }
}
