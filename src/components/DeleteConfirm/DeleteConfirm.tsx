import { useDeleteConfirm } from "./useDeleteConfirm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import { StyledButtonGroup } from "./DeleteConfirm.styled";
import { H2, StyledParagraph } from "../../common/styles/fontStyles";
import { Button } from "../../common/styles/buttonStyles";
import Modal from "../Modal/Modal";

type DeleteConfirmProps = {
  id?: string;
  hide: () => void;
  actionDelete: (id?: string) => Promise<void>;
  redirect: boolean;
};

const DeleteConfirm = ({ id, hide, actionDelete, redirect }: DeleteConfirmProps) => {
  const { loading, handleDelete, cancel } = useDeleteConfirm({
    id,
    actionDelete,
    hide,
    redirect,
  });

  return (
    <Modal hide={hide}>
      <H2>Are you sure?</H2>
      <StyledParagraph>Are you sure you wish to delete this item?</StyledParagraph>
      <StyledButtonGroup>
        <Button variant="danger" disabled={loading.current} onClick={handleDelete}>
          {loading.current ? (
            <FontAwesomeIcon icon={faSpinner} size="lg" spin />
          ) : (
            <>
              <FontAwesomeIcon icon={faCheck} size="lg" />
              {"Confirm"}
            </>
          )}
        </Button>
        <Button variant="secondary" onClick={cancel}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
          Cancel
        </Button>
      </StyledButtonGroup>
    </Modal>
  );
};

export default DeleteConfirm;
