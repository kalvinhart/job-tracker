import SelectColumnFilter from "../SelectColumnFilter/SelectColumnFilter";

interface IColumnData {
  Header: string;
  accessor: string;
  Filter?: (props: any) => JSX.Element;
  filter?: string;
  disableFilters?: boolean;
}

export const columnData: IColumnData[] = [
  {
    Header: "ID",
    accessor: "id",
    disableFilters: true,
  },
  {
    Header: "Job Title",
    accessor: "title",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "Location",
    accessor: "location",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "Salary",
    accessor: "salary",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "Company",
    accessor: "company",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "Benefits",
    accessor: "benefits",
    disableFilters: true,
  },
  {
    Header: "Contact Name",
    accessor: "contactName",
    disableFilters: true,
  },
  {
    Header: "Contact Number",
    accessor: "contactNumber",
    disableFilters: true,
  },
  {
    Header: "Interview Appointment",
    accessor: "interview",
    disableFilters: true,
  },
  {
    Header: "Date Applied",
    accessor: "date",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "Status",
    accessor: "status",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
];

export const statusOptions = ["Pending", "Interview", "Rejected", "Expired"];
export const centeredColumns = [
  "Salary",
  "Contact Number",
  "Interview Appointment",
  "Date Applied",
  "Status",
];
