import { useDeleteConfirm } from "./useDeleteConfirm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import { StyledButtonGroup } from "./DeleteConfirm.styled";
import { H2, StyledParagraph } from "../../styles/fontStyles";
import { Button } from "../../styles/buttonStyles";
import Modal from "../Modal/Modal";

const DeleteConfirm = ({ id, hide, actionDelete, redirect }) => {
  const { loading, handleDelete, cancel } = useDeleteConfirm(
    actionDelete,
    hide,
    redirect
  );

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
