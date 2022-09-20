export interface Job {
  benefits?: string | string[];
  company: string;
  contactName?: string;
  contactNumber?: string;
  date: number | string;
  updated: number;
  description?: string;
  id?: number;
  interview?: number | string;
  location: string;
  salary: number;
  status?: string;
  title: string;
}
