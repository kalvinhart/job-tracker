import { useRef } from "react";
import { createPortal } from "react-dom";

import { StyledOverlay, StyledModalContainer } from "./Modal.styled";

const Modal = ({ hide, children }) => {
  const modalRef = useRef();

  const handleOverlayClose = (e) => {
    if (modalRef.current === e.target.closest("div[data-name='modal']")) return;
    hide();
  };

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
