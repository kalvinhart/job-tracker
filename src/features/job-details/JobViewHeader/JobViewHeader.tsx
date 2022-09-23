import { useJobViewHeader } from "../hooks/useJobViewHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import DeleteConfirm from "../../../common/components/DeleteConfirm/DeleteConfirm";

import { JobViewHeaderWrapper, JobViewHeaderGroup } from "./JobViewHeader.styles";

import { Button } from "../../../common/styles/buttonStyles";

import { Job } from "../../../common/types/job";
import { JobForm } from "../../job-form/JobForm";

type JobViewHeaderProps = {
  job: Job;
};

const JobViewHeader = ({ job }: JobViewHeaderProps) => {
  const {
    actionDeleteJob,
    setShowDeleteWarning,
    setShowJobForm,
    showDeleteWarning,
    showJobForm,
  } = useJobViewHeader(job);

  return (
    <JobViewHeaderWrapper>
      <JobViewHeaderGroup>
        <Button variant="secondary" onClick={() => setShowJobForm(true)}>
          <FontAwesomeIcon icon={faEdit} />
          Edit
        </Button>
        <Button variant="danger" onClick={() => setShowDeleteWarning(true)}>
          <FontAwesomeIcon icon={faTrash} />
          Delete
        </Button>
      </JobViewHeaderGroup>

      {showDeleteWarning && (
        <DeleteConfirm
          redirect={true}
          id={job.id}
          actionDelete={actionDeleteJob}
          hide={() => setShowDeleteWarning(false)}
        />
      )}

      {showJobForm && (
        <JobForm close={() => setShowJobForm(false)} editing={true} job={job} />
      )}
    </JobViewHeaderWrapper>
  );
};

export default JobViewHeader;
