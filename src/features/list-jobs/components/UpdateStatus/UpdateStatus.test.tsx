import { jobsRender, screen } from "../../../../common/utilities/tests/testUtils";
import { JOB_STATUS } from "../../../../config/jobStatus";
import UpdateStatus from "./UpdateStatus";

describe("UpdateStatus", () => {
  test("Renders correct initial status", () => {
    jobsRender(<UpdateStatus close={() => {}} currentStatus="Rejected" jobId="1" />);

    const optionElement = screen.getByRole<HTMLOptionElement>("option", {
      name: "Rejected",
    });
    expect(optionElement.selected).toBe(true);
  });

  test("Renders correct number of options", () => {
    jobsRender(<UpdateStatus close={() => {}} currentStatus="Rejected" jobId="1" />);

    const optionsElement = screen.getAllByRole<HTMLOptionElement>("option");
    expect(optionsElement.length).toBe(JOB_STATUS.length);
  });
});
