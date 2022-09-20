import { Job } from "../../domain/entities/job";

export interface BackendJob {
  id: number;
  status: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
  date_applied: number;
  date_updated: number;
  interview_date: number;
  benefits: string;
  contact_name: string;
  contact_number: string;
  user_id: number;
}

export interface JobResponse {
  status: number;
  message: string;
  data?: BackendJob | BackendJob[] | Job | Job[];
}

export interface UserResponse {
  status: number;
  message: string;
  uid?: string;
  token?: string;
}
