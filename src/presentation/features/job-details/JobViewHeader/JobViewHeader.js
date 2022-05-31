import { useUi } from "../../../hooks/useUi/useUi";
import { useJob } from "../hooks/useJob";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import DeleteConfirm from "../../../shared/DeleteConfirm/DeleteConfirm";

import {
  StyledJobViewHeadingDiv,
  StyledJobViewHeadingGroup,
} from "./JobViewHeader.styles";

import { StatusSpan } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";
import { H2 } from "../../../styles/fontStyles";

const JobViewHeader = ({ currentJob: { id, title, status } }) => {
  const {
    openAndEdit,
    showDeleteWarning: { deleteJob },
    setShowDeleteWarning,
  } = useUi();

  const { deleteJobById } = useJob();

  return (
    <StyledJobViewHeadingDiv>
      <StyledJobViewHeadingGroup>
        <H2>{title}</H2>
        <StatusSpan status={status}>{status}</StatusSpan>
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
          actionDelete={() => deleteJobById(id)}
        />
      )}
    </StyledJobViewHeadingDiv>
  );
};

export default JobViewHeader;
