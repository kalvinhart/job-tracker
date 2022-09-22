import { useJobViewHeader } from "../hooks/useJobViewHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import DeleteConfirm from "../../../common/components/DeleteConfirm/DeleteConfirm";

import { JobViewHeaderWrapper, JobViewHeaderGroup } from "./JobViewHeader.styles";

import { Button } from "../../../common/styles/buttonStyles";

import { Job } from "../../../common/types/job";

type JobViewHeaderProps = {
  currentJob: Job;
};

const JobViewHeader = ({ currentJob }: JobViewHeaderProps) => {
  const { openAndEdit, deleteJob, setShowDeleteWarning, actionDeleteJob } =
    useJobViewHeader(currentJob);

  return (
    <JobViewHeaderWrapper>
      <JobViewHeaderGroup>
        <Button variant="secondary" onClick={() => openAndEdit(currentJob)}>
          <FontAwesomeIcon icon={faEdit} />
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() => setShowDeleteWarning({ deleteJob: true })}
        >
          <FontAwesomeIcon icon={faTrash} />
          Delete
        </Button>
      </JobViewHeaderGroup>

      {deleteJob && (
        <DeleteConfirm
          redirect={true}
          id={currentJob.id}
          actionDelete={actionDeleteJob}
        />
      )}
    </JobViewHeaderWrapper>
  );
};

export default JobViewHeader;
