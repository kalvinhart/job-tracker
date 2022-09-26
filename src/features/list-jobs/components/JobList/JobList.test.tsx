import { render, screen } from "../../../../common/utilities/tests/testUtils";
import { Job } from "../../../../common/types/job";
import JobList from "./JobList";

const jobs: Job[] = [
  {
    id: "1",
    title: "Test Job1",
    company: "Not Real LTD",
    location: "Remote",
    salary: "30000",
    status: "Pending",
    date: 0,
  },
  {
    id: "2",
    title: "Test Job2",
    company: "Fake LTD",
    location: "London",
    salary: "40000",
    status: "Rejected",
    date: 0,
  },
];

jest.mock("../../../../common/hooks/useMediaQuery/useMediaQuery.ts", () => ({
  useMediaQuery: () => false,
}));

let mockJobs: Job[] = [];
let mockSelectedJobs: string[] = [];
let mockSelectedTab: string = "All";

jest.mock("../../hooks/useJobList.ts", () => ({
  useJobList: () => ({
    cancelSelection: () => {},
    handleCloseJobForm: () => {},
    handleDeleteMany: () => {},
    handleTabChange: () => {},
    handleOpenJobForm: () => {},
    jobsToDisplay: mockJobs,
    selectedJobs: mockSelectedJobs,
    selectedTab: mockSelectedTab,
    setShowDeleteWarning: () => {},
    showDeleteWarning: false,
    showJobForm: false,
  }),
}));

describe("JobList", () => {
  test("Displays no content message when no jobs to display", () => {
    mockJobs = [];

    render(<JobList />);

    const noContentElement = screen.getByText("There are no jobs in this category.");
    expect(noContentElement).toBeInTheDocument();
  });

  test("Does not display no content message when jobs to display", () => {
    mockJobs = jobs;

    render(<JobList />);

    const noContentElement = screen.queryByText("There are no jobs in this category.");
    expect(noContentElement).not.toBeInTheDocument();
  });

  test("Does not display delete buttons when no jobs selected", () => {
    mockSelectedJobs = [];

    render(<JobList />);

    const deleteButtonElement = screen.queryByRole("button", { name: "Delete" });
    expect(deleteButtonElement).not.toBeInTheDocument();
  });

  test("Displays delete buttons when jobs selected", () => {
    mockSelectedJobs = ["1"];

    render(<JobList />);

    const deleteButtonElement = screen.getByRole("button", { name: "Delete" });
    expect(deleteButtonElement).toBeInTheDocument();
  });

  test("Displays corrrect selected tab", () => {
    mockSelectedTab = "Interview";

    render(<JobList />);

    const interviewTabElement = screen.getByTestId("selected-tab-true");
    expect(interviewTabElement.textContent).toBe("Interview");
  });
});
