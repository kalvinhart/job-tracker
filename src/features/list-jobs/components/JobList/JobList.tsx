import { faPlus, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useJobList } from "../../hooks/useJobList";

import { JobItem } from "../JobItem";
import {
  JobListButtonWrapper,
  JobListContent,
  JobListDeleteButtonsWrapper,
  JobListHeader,
  JobListTabButton,
  JobListWrapper,
  NoContent,
  NoContentSpan,
} from "./JobList.styles";
import { Button } from "../../../../common/styles/buttonStyles";
import DeleteConfirm from "../../../../common/components/DeleteConfirm/DeleteConfirm";
import { JobForm } from "../../../job-form/JobForm";

const JobList = () => {
  const {
    cancelSelection,
    handleCloseJobForm,
    handleDeleteMany,
    handleTabChange,
    handleOpenJobForm,
    jobsToDisplay,
    selectedJobs,
    selectedTab,
    setShowDeleteWarning,
    showDeleteWarning,
    showJobForm,
  } = useJobList();

  return (
    <JobListWrapper>
      <JobListHeader>
        <JobListButtonWrapper>
          <JobListTabButton
            onClick={handleTabChange}
            selected={selectedTab === "All"}
            data-testid={`selected-tab-${selectedTab === "All"}`}
          >
            All
          </JobListTabButton>
          <JobListTabButton
            onClick={handleTabChange}
            selected={selectedTab === "Pending"}
            data-testid={`selected-tab-${selectedTab === "Pending"}`}
          >
            Pending
          </JobListTabButton>
          <JobListTabButton
            onClick={handleTabChange}
            selected={selectedTab === "Interview"}
            data-testid={`selected-tab-${selectedTab === "Interview"}`}
          >
            Interview
          </JobListTabButton>
          <JobListTabButton
            onClick={handleTabChange}
            selected={selectedTab === "Rejected"}
            data-testid={`selected-tab-${selectedTab === "Rejected"}`}
          >
            Rejected
          </JobListTabButton>
          <JobListTabButton
            onClick={handleTabChange}
            selected={selectedTab === "Expired"}
            data-testid={`selected-tab-${selectedTab === "Expired"}`}
          >
            Expired
          </JobListTabButton>
        </JobListButtonWrapper>

        {selectedJobs.length > 0 ? (
          <JobListDeleteButtonsWrapper>
            <Button variant="danger" onClick={() => setShowDeleteWarning(true)}>
              <FontAwesomeIcon icon={faTrash} size="lg" /> Delete
            </Button>
            <Button variant="secondary" onClick={cancelSelection}>
              <FontAwesomeIcon icon={faTimes} size="lg" /> Cancel
            </Button>
          </JobListDeleteButtonsWrapper>
        ) : (
          <Button variant="primary" onClick={() => handleOpenJobForm()}>
            <FontAwesomeIcon icon={faPlus} size="lg" /> Add Job
          </Button>
        )}
      </JobListHeader>

      {showDeleteWarning && (
        <DeleteConfirm
          actionDelete={handleDeleteMany}
          redirect={false}
          hide={() => setShowDeleteWarning(false)}
        />
      )}

      <JobListContent>
        {jobsToDisplay.length > 0 ? (
          jobsToDisplay.map((job) => (
            <JobItem key={job.id} job={job} selected={selectedJobs.includes(job.id!)} />
          ))
        ) : (
          <NoContent>
            <NoContentSpan>There are no jobs in this category.</NoContentSpan>
          </NoContent>
        )}
      </JobListContent>

      {showJobForm && <JobForm close={() => handleCloseJobForm()} />}
    </JobListWrapper>
  );
};

export default JobList;
