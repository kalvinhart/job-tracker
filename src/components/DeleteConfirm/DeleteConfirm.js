import { useContext, useState } from "react";
import { JobContext } from "../../context/jobContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { StyledButtonGroup } from "./DeleteConfirm.styled";
import { H2, StyledParagraph } from "../../styles/fontStyles";
import { Button } from "../../styles/buttonStyles";

const DeleteConfirm = ({ id, setShowDeleteModal }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { removeJob } = useContext(JobContext);

  const actionDelete = async (id) => {
    setLoading(true);
    await removeJob(id);
    setLoading(false);
    setShowDeleteModal(false);
    navigate("/");
  };

  const cancel = () => {
    setShowDeleteModal(false);
  };
  return (
    <>
      <H2>Are you sure?</H2>
      <StyledParagraph>Are you sure you wish to delete this item?</StyledParagraph>
      <StyledButtonGroup>
        <Button primary disabled={loading} onClick={() => actionDelete(id)}>
          {loading ? <FontAwesomeIcon icon={faSpinner} size="lg" spin /> : "Confirm"}
        </Button>
        <Button secondary onClick={cancel}>
          Cancel
        </Button>
      </StyledButtonGroup>
    </>
  );
};

export default DeleteConfirm;
