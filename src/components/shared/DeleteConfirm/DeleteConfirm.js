import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { StyledButtonGroup } from "./DeleteConfirm.styled";
import { H2, StyledParagraph } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";
import Modal from "../Modal/Modal";

const DeleteConfirm = ({ id, show, hide, actionDelete, redirect }) => {
  const loading = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    return (loading.current = false);
  }, []);

  const handleDelete = async (id) => {
    loading.current = true;
    await actionDelete(id);
    hide();
    redirect && navigate("/");
  };

  const cancel = () => {
    hide();
  };

  return (
    <Modal show={show} hide={hide}>
      <H2>Are you sure?</H2>
      <StyledParagraph>Are you sure you wish to delete this item?</StyledParagraph>
      <StyledButtonGroup>
        <Button primary disabled={loading.current} onClick={() => handleDelete(id)}>
          {loading.current ? (
            <FontAwesomeIcon icon={faSpinner} size="lg" spin />
          ) : (
            "Confirm"
          )}
        </Button>
        <Button secondary onClick={cancel}>
          Cancel
        </Button>
      </StyledButtonGroup>
    </Modal>
  );
};

export default DeleteConfirm;
