import SelectColumnFilter from "./SelectColumnFilter";

export const columnData = [
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
    Header: "Date Applied",
    accessor: "date",
    disableFilters: true,
  },
  {
    Header: "Status",
    accessor: "status",
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
];

export const jobData = [
  {
    title: "Junior Dev",
    location: "Remote",
    salary: "25000",
    company: "Not Real LTD",
    date: new Date().toDateString(),
    status: "Pending",
    benefits: "Health, Casual Dress, 25 Day Holiday",
    contactName: "John Smith",
    contactNumber: "01234567890",
    interview: "",
  },
  {
    title: "Junior React Dev",
    location: "Bracknell",
    salary: "30000",
    company: "Some Company LTD",
    date: new Date().toDateString(),
    status: "Pending",
    benefits: "28 Day Holiday",
    contactName: "Alan Smith",
    contactNumber: "01234567890",
    interview: "",
  },
  {
    title: "Front End Dev",
    location: "Bristol",
    salary: "22000",
    company: "Bristol LTD",
    date: new Date().toDateString(),
    status: "Pending",
    benefits: "Health, Casual Dress, 25 Day Holiday,",
    contactName: "Jane Doe",
    contactNumber: "01234567890",
    interview: "",
  },
];
