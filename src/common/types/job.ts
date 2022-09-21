export interface Job {
  benefits?: string | string[];
  company: string;
  contactName?: string;
  contactNumber?: string;
  date: number | string;
  description?: string;
  id?: string;
  interview?: number | string;
  location: string;
  resource?: string;
  salary: string;
  status: "Pending" | "Interview" | "Rejected" | "Expired";
  title: string;
}
