import { Job } from "../../common/types/job";
import { IJobService } from "../interfaces/IJobService";

export default class JobService implements IJobService {
  api: IJobService;

  constructor(api: IJobService) {
    this.api = api;
  }

  async getJobs(uid: string): Promise<Job[]> {
    return await this.api.getJobs(uid);
  }

  async getJob(id: string): Promise<Job> {
    return await this.api.getJob(id);
  }

  async createJob(data: Job): Promise<Job> {
    return await this.api.createJob(data);
  }

  async updateJob(id: string, data: Job): Promise<Job> {
    return await this.api.updateJob(id, data);
  }

  async updateField(field: string, id: string, data: string | number): Promise<Job> {
    return await this.api.updateField(field, id, data);
  }

  async deleteJob(id: string): Promise<void> {
    return await this.api.deleteJob(id);
  }

  async deleteMany(ids: string[]): Promise<void> {
    return await this.api.deleteMany(ids);
  }

  async deleteInterview(id: string): Promise<string> {
    return await this.api.deleteInterview(id);
  }
}
