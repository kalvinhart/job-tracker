import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import JobView from "./JobView";

describe("JobView component", () => {
  test("renders job title", () => {
    render(
      <MemoryRouter>
        <JobView title="Test" />
      </MemoryRouter>
    );
    const jobTitle = screen.getByText(/test/i);
    expect(jobTitle).toBeInTheDocument();
  });

  test("triggers delete modal on button click", () => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);

    const deleteJob = () => {};
    render(
      <MemoryRouter>
        <JobView deleteJob={deleteJob} />
      </MemoryRouter>
    );

    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);

    const modal = screen.getByText(/sure you wish to delete/i);
    expect(modal).toBeInTheDocument();
  });
});
