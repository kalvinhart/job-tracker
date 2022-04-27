import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import { StyledButtonGroup } from "./DeleteConfirm.styled";
import { H2, StyledParagraph } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";
import Modal from "../Modal/Modal";

const DeleteConfirm = ({ id, hide, actionDelete, redirect }) => {
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
    <Modal hide={hide}>
      <H2>Are you sure?</H2>
      <StyledParagraph>Are you sure you wish to delete this item?</StyledParagraph>
      <StyledButtonGroup>
        <Button danger disabled={loading.current} onClick={() => handleDelete(id)}>
          {loading.current ? (
            <FontAwesomeIcon icon={faSpinner} size="lg" spin />
          ) : (
            <>
              <FontAwesomeIcon icon={faCheck} size="lg" />
              {"Confirm"}
            </>
          )}
        </Button>
        <Button secondary onClick={cancel}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
          Cancel
        </Button>
      </StyledButtonGroup>
    </Modal>
  );
};

export default DeleteConfirm;
