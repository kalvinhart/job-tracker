import { useRef } from "react";
import { createPortal } from "react-dom";

import { StyledOverlay, StyledModalContainer } from "./Modal.styled";

const Modal = ({ show, hide, children }) => {
  const modalRef = useRef();

  if (!show) return null;

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
