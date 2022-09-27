import { render, screen } from "../../common/utilities/tests/testUtils";
import { Job } from "../../common/types/job";
import JobsPage from "./JobsPage";

let mockLoading = true;
let mockJobs: Job[] = [];

jest.mock("../../common/hooks/useJobContext/useJobContext.ts", () => ({
  useJobContext: () => ({
    loading: mockLoading,
  }),
}));

jest.mock("../../features/list-jobs/hooks/useJobList.ts", () => ({
  useJobList: () => ({
    jobsToDisplay: mockJobs,
    selectedJobs: [],
  }),
}));

jest.mock("../../common/hooks/useMediaQuery/useMediaQuery.ts", () => ({
  useMediaQuery: () => false,
}));

describe("JobsPage", () => {
  test("Shows spinner when loading", () => {
    mockLoading = true;
    render(<JobsPage />);

    const loadingElement = screen.getByTestId("spinner");
    expect(loadingElement).toBeInTheDocument();
  });

  test("Does not show spinner when not loading", () => {
    mockLoading = false;
    render(<JobsPage />);

    const loadingElement = screen.queryByTestId("spinner");
    expect(loadingElement).not.toBeInTheDocument();
  });

  test("Shows no data if no jobs exist", () => {
    mockJobs = [];

    render(<JobsPage />);

    const noDataElement = screen.getByText("There are no jobs in this category.");
    expect(noDataElement).toBeInTheDocument();
  });

  test("Does not show no data if jobs exist", () => {
    mockJobs = [
      {
        id: "1",
        title: "Test Job1",
        company: "Not Real LTD",
        location: "Remote",
        salary: "30000",
        status: "Pending",
        date: 0,
      },
    ];

    render(<JobsPage />);

    const noDataElement = screen.queryByText("There are no jobs in this category.");
    expect(noDataElement).not.toBeInTheDocument();
  });
});
