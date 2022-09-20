import { makeApiInstance } from "../api.config";
import { checkForError } from "../utils/checkForError";

import { Job } from "../../../domain/entities/job";
import { IJobService, JobRequest } from "../../interfaces/IJobService";
import { JobResponse } from "../../types/Response";
import { mapToModel } from "../utils/mapToModel";

type Methods = "get" | "post" | "put" | "delete";

export default class JobAPI implements IJobService {
  async processRequest(options: JobRequest): Promise<JobResponse> {
    const { token, method, url, data } = options;

    const api = makeApiInstance(token);
    const response = await api[method as Methods](url, data);

    checkForError(response.data.status, response.data.message);

    const mappedData = mapToModel(response.data.data);

    return {
      status: response.data.status,
      message: response.data.message,
      data: mappedData,
    };
  }

  async getJob(token: string, id: string): Promise<JobResponse> {
    return this.processRequest({ token, method: "get", url: `/job/${id}` });
  }

  async getJobs(token: string): Promise<JobResponse> {
    const api = makeApiInstance(token);
    const response = await api.get("/jobs");
    return response.data;
  }

  async createJob(token: string, data: Job): Promise<JobResponse> {
    return this.processRequest({ token, method: "post", url: "/jobs", data });
  }

  async updateJob(token: string, data: Job): Promise<JobResponse> {
    return this.processRequest({ token, method: "put", url: "/jobs", data });
  }

  async deleteJob(token: string, id: string): Promise<JobResponse> {
    return this.processRequest({ token, method: "delete", url: `/job/${id}` });
  }

  async deleteInterview(token: string, id: string): Promise<JobResponse> {
    return this.processRequest({ token, method: "delete", url: `/job/interview/${id}` });
  }
}
