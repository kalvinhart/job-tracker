import { createPortal } from "react-dom";
import { useModal } from "../../hooks/useModal/useModal";

import { StyledOverlay, StyledModalContainer } from "./Modal.styled";

const Modal = ({ hide, children }) => {
  const { modalRef, handleOverlayClose } = useModal(hide);

  return createPortal(
    <StyledOverlay onClick={handleOverlayClose}>
      <StyledModalContainer data-name="modal" ref={modalRef}>
        {children}
      </StyledModalContainer>
    </StyledOverlay>,
    document.getElementById("modal-root")
  );
};

export default Modal;
