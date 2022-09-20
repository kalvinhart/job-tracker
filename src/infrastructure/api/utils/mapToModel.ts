import { Job } from "../../../domain/entities/job";
import { BackendJob } from "../../types/Response";

export const mapToModel = (data: BackendJob): Job => {
  return {
    id: data.id,
    status: data.status,
    title: data.title,
    company: data.company,
    location: data.location,
    salary: data.salary,
    description: data.description,
    date: data.date_applied,
    updated: data.date_updated,
    interview: data.interview_date,
    benefits: data.benefits,
    contactName: data.contact_name,
    contactNumber: data.contact_number,
  };
};
