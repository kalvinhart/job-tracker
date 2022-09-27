import { jobsRender, screen } from "../../../../common/utilities/tests/testUtils";
import JobItem from "./JobItem";
import { Job } from "../../../../common/types/job";

jest.mock("../../../../common/hooks/useMediaQuery/useMediaQuery.ts", () => ({
  useMediaQuery: () => false,
}));

const testJob: Job = {
  id: "test1",
  title: "A Test Job",
  company: "Not Real LTD",
  location: "Remote",
  date: 0,
  salary: "25000",
  status: "Pending",
  resource: "Indeed",
  interview: 1,
};

describe("JobItem", () => {
  test("Renders correct job information", () => {
    jobsRender(<JobItem selected={false} job={testJob} />);

    const linkElement = screen.getByRole("link");

    expect(linkElement.textContent).toBe("A Test Job");
    expect(linkElement.getAttribute("href")).toBe("/job/test1");

    const statusElement = screen.getByText("Pending");
    expect(statusElement).toBeInTheDocument();

    const locationElement = screen.getByText("Remote");
    expect(locationElement).toBeInTheDocument();

    const companyElement = screen.getByText("Not Real LTD");
    expect(companyElement).toBeInTheDocument();

    const salaryElement = screen.getByText("£25000");
    expect(salaryElement).toBeInTheDocument();

    const interviewElement = screen.getByTestId("job-item-interview-date");
    expect(interviewElement.textContent).toBe(
      "You have an interview for this job on 1st January."
    );

    const dateElement = screen.getByTestId("job-item-applied-date");
    expect(dateElement.textContent).toContain("Applied on 1st January");

    const resourceElement = screen.getByTestId("job-item-applied-date");
    expect(resourceElement.textContent).toContain("via Indeed");
  });
});
