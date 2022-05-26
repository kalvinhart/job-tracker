enum JobStatus {
  "Pending",
  "Interview",
  "Rejected",
  "Expired",
}

export type Job = {
  benefits?: string;
  company: string;
  contactName?: string;
  contactNumber?: string;
  date: number | string;
  description?: string;
  id?: string;
  interview?: number | string;
  location: string;
  salary: string;
  status?: JobStatus;
  title: string;
};
