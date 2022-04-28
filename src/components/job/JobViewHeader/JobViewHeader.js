import { useDispatch, useSelector } from "react-redux";

import {
  setShowDeleteWarning,
  enableEditing,
  openSidePanel,
} from "../../../slices/uiSlice";
import { deleteJobById } from "../../../slices/jobSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import DeleteConfirm from "../../shared/DeleteConfirm/DeleteConfirm";

import {
  StyledJobViewHeadingDiv,
  StyledJobViewHeadingGroup,
} from "./JobViewHeader.styles";

import { StatusSpan } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";
import { H2 } from "../../../styles/fontStyles";

const JobViewHeader = () => {
  const dispatch = useDispatch();

  const {
    showDeleteWarning: { deleteJob },
  } = useSelector((state) => state.ui);

  const {
    currentJob: { id, title, status },
  } = useSelector((state) => state.job);

  const openEdit = () => {
    dispatch(enableEditing());
    dispatch(openSidePanel());
  };

  return (
    <StyledJobViewHeadingDiv>
      <StyledJobViewHeadingGroup>
        <H2>{title}</H2>
        <StatusSpan status={status}>{status}</StatusSpan>
      </StyledJobViewHeadingGroup>

      <StyledJobViewHeadingGroup>
        <Button secondary onClick={openEdit}>
          <FontAwesomeIcon icon={faEdit} />
          Edit
        </Button>
        <Button
          danger
          onClick={() => dispatch(setShowDeleteWarning({ deleteJob: true }))}
        >
          <FontAwesomeIcon icon={faTrash} />
          Delete
        </Button>
      </StyledJobViewHeadingGroup>

      {deleteJob && (
        <DeleteConfirm
          redirect={true}
          hide={() => dispatch(setShowDeleteWarning({ deleteJob: false }))}
          id={id}
          actionDelete={() => dispatch(deleteJobById(id))}
        />
      )}
    </StyledJobViewHeadingDiv>
  );
};

export default JobViewHeader;
