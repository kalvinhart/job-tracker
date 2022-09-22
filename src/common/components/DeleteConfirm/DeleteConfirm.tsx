import { useDeleteConfirm } from "./useDeleteConfirm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import { StyledButtonGroup } from "./DeleteConfirm.styled";
import { H2, Paragraph } from "../../styles/fontStyles";
import { Button } from "../../styles/buttonStyles";
import Modal from "../Modal/Modal";
import { useUiSlice } from "../../hooks/useUiSlice/useUiSlice";

type DeleteConfirmProps = {
  id?: string;
  actionDelete: (id?: string) => Promise<void>;
  redirect: boolean;
};

const DeleteConfirm = ({ id, actionDelete, redirect }: DeleteConfirmProps) => {
  const { setShowDeleteWarning } = useUiSlice();

  const hide = () => setShowDeleteWarning({ deleteInterview: false, deleteJob: false });

  const { loading, handleDelete, cancel } = useDeleteConfirm({
    id,
    actionDelete,
    hide,
    redirect,
  });

  return (
    <Modal hide={hide}>
      <H2>Are you sure?</H2>
      <Paragraph>Are you sure you wish to delete this item?</Paragraph>
      <StyledButtonGroup>
        <Button variant="danger" disabled={loading} onClick={handleDelete}>
          {loading ? (
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
