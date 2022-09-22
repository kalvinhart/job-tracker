import { useUiSlice } from "../../../common/hooks/useUiSlice/useUiSlice";
import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";

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
  const {
    openAndEdit,
    showDeleteWarning: { deleteJob },
    setShowDeleteWarning,
  } = useUiSlice();

  const { deleteJobById } = useJobSlice();

  const actionDeleteJob = async (): Promise<void> => {
    await deleteJobById(currentJob.id!);
  };

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
