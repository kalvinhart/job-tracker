import { useContext, useState } from "react";
import { JobContext } from "../../context/jobContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { StyledButtonGroup } from "./DeleteConfirm.styled";
import { H2, StyledParagraph } from "../../styles/fontStyles";
import { Button } from "../../styles/buttonStyles";
import Modal from "../Modal/Modal";

const DeleteConfirm = ({
  id,
  show,
  hide,
  actionDelete,
  setShowDeleteModal,
  redirect,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    setLoading(true);
    await actionDelete(id);
    setLoading(false);
    setShowDeleteModal(false);
    redirect && navigate("/");
  };

  const cancel = () => {
    setShowDeleteModal(false);
  };
  return (
    <Modal show={show} hide={hide}>
      <H2>Are you sure?</H2>
      <StyledParagraph>Are you sure you wish to delete this item?</StyledParagraph>
      <StyledButtonGroup>
        <Button primary disabled={loading} onClick={() => handleDelete(id)}>
          {loading ? <FontAwesomeIcon icon={faSpinner} size="lg" spin /> : "Confirm"}
        </Button>
        <Button secondary onClick={cancel}>
          Cancel
        </Button>
      </StyledButtonGroup>
    </Modal>
  );
};

export default DeleteConfirm;
