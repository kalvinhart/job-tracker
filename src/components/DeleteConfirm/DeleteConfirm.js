import { useContext } from "react";
import { JobContext } from "../../context/jobContext";
import { useNavigate } from "react-router-dom";

import { StyledButtonGroup } from "./DeleteConfirm.styled";
import { H2, StyledParagraph } from "../../styles/fontStyles";
import { Button } from "../../styles/buttonStyles";

const DeleteConfirm = ({ id, setShowDeleteModal }) => {
  const navigate = useNavigate();
  const { removeJob } = useContext(JobContext);

  const actionDelete = async (id) => {
    await removeJob(id);
    setShowDeleteModal(false);
    navigate("/");
  };

  const cancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <H2>Are you sure?</H2>
      <StyledParagraph>Are you sure you wish to delete this job?</StyledParagraph>
      <StyledButtonGroup>
        <Button primary onClick={() => actionDelete(id)}>
          Confirm
        </Button>
        <Button secondary onClick={cancel}>
          Cancel
        </Button>
      </StyledButtonGroup>
    </>
  );
};

export default DeleteConfirm;
