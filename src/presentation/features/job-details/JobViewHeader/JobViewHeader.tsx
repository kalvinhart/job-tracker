import { useUiSlice } from "../../../hooks/useUiSlice/useUiSlice";
import { useJobSlice } from "../../../hooks/useJobSlice/useJobSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import DeleteConfirm from "../../../components/DeleteConfirm/DeleteConfirm";

import {
  StyledJobViewHeadingDiv,
  StyledJobViewHeadingGroup,
} from "./JobViewHeader.styles";

import { StatusSpan } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";
import { H2 } from "../../../styles/fontStyles";

import { Job } from "../../../../domain/entities/job";

type JobViewHeaderProps = {
  currentJob: Job;
};

const JobViewHeader = ({ currentJob: { id, title, status } }: JobViewHeaderProps) => {
  const {
    openAndEdit,
    showDeleteWarning: { deleteJob },
    setShowDeleteWarning,
  } = useUiSlice();

  const { deleteJobById } = useJobSlice();

  const actionDeleteJob = async (): Promise<void> => {
    await deleteJobById(id!);
  };

  return (
    <StyledJobViewHeadingDiv>
      <StyledJobViewHeadingGroup>
        <H2>{title}</H2>
        <StatusSpan status={status!}>{status}</StatusSpan>
      </StyledJobViewHeadingGroup>

      <StyledJobViewHeadingGroup>
        <Button secondary onClick={openAndEdit}>
          <FontAwesomeIcon icon={faEdit} />
          Edit
        </Button>
        <Button danger onClick={() => setShowDeleteWarning({ deleteJob: true })}>
          <FontAwesomeIcon icon={faTrash} />
          Delete
        </Button>
      </StyledJobViewHeadingGroup>

      {deleteJob && (
        <DeleteConfirm
          redirect={true}
          hide={() => setShowDeleteWarning({ deleteJob: false })}
          id={id}
          actionDelete={actionDeleteJob}
        />
      )}
    </StyledJobViewHeadingDiv>
  );
};

export default JobViewHeader;
