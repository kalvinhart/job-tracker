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
} from "./JobList.styles";
import { Button } from "../../../../common/styles/buttonStyles";
import DeleteConfirm from "../../../../common/components/DeleteConfirm/DeleteConfirm";

const JobList = () => {
  const {
    jobsToDisplay,
    selectedTab,
    handleTabChange,
    selectedJobs,
    cancelSelection,
    showDeleteWarning,
    setShowDeleteWarning,
    handleDeleteMany,
  } = useJobList();

  return (
    <JobListWrapper>
      <JobListHeader>
        <JobListButtonWrapper>
          <JobListTabButton onClick={handleTabChange} selected={selectedTab === "All"}>
            All
          </JobListTabButton>
          <JobListTabButton
            onClick={handleTabChange}
            selected={selectedTab === "Pending"}
          >
            Pending
          </JobListTabButton>
          <JobListTabButton
            onClick={handleTabChange}
            selected={selectedTab === "Interview"}
          >
            Interview
          </JobListTabButton>
          <JobListTabButton
            onClick={handleTabChange}
            selected={selectedTab === "Rejected"}
          >
            Rejected
          </JobListTabButton>
          <JobListTabButton
            onClick={handleTabChange}
            selected={selectedTab === "Expired"}
          >
            Expired
          </JobListTabButton>
        </JobListButtonWrapper>

        {selectedJobs.length > 0 ? (
          <JobListDeleteButtonsWrapper>
            <Button variant="danger" onClick={handleDeleteMany}>
              <FontAwesomeIcon icon={faTrash} size="lg" /> Delete
            </Button>
            <Button variant="secondary" onClick={cancelSelection}>
              <FontAwesomeIcon icon={faTimes} size="lg" /> Cancel
            </Button>
          </JobListDeleteButtonsWrapper>
        ) : (
          <Button variant="primary">
            <FontAwesomeIcon icon={faPlus} size="lg" /> Add Job
          </Button>
        )}
      </JobListHeader>

      {showDeleteWarning.deleteJob && (
        <DeleteConfirm actionDelete={handleDeleteMany} redirect={false} />
      )}

      <JobListContent>
        {jobsToDisplay &&
          jobsToDisplay.map((job) => (
            <JobItem key={job.id} job={job} selected={selectedJobs.includes(job.id!)} />
          ))}
      </JobListContent>
    </JobListWrapper>
  );
};

export default JobList;
