import { useJobViewHeader } from "../hooks/useJobViewHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import DeleteConfirm from "../../../common/components/DeleteConfirm/DeleteConfirm";

import { JobViewHeaderWrapper, JobViewHeaderGroup } from "./JobViewHeader.styles";

import { Button } from "../../../common/styles/buttonStyles";

import { Job } from "../../../common/types/job";
import { JobForm } from "../../job-form/JobForm";

type JobViewHeaderProps = {
  currentJob: Job;
};

const JobViewHeader = ({ currentJob }: JobViewHeaderProps) => {
  const {
    deleteJob,
    setShowDeleteWarning,
    actionDeleteJob,
    showJobForm,
    setShowJobForm,
  } = useJobViewHeader(currentJob);

  return (
    <JobViewHeaderWrapper>
      <JobViewHeaderGroup>
        <Button variant="secondary" onClick={() => setShowJobForm(true)}>
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

      {showJobForm && (
        <JobForm close={() => setShowJobForm(false)} editing={true} job={currentJob} />
      )}
    </JobViewHeaderWrapper>
  );
};

export default JobViewHeader;
