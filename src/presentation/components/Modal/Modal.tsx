import { createPortal } from "react-dom";
import { useModal } from "./useModal";

import { StyledOverlay, StyledModalContainer } from "./Modal.styled";

type ModalProps = {
  hide: () => void;
  children: React.ReactNode;
};

const Modal = ({ hide, children }: ModalProps) => {
  const { modalRef, handleOverlayClose } = useModal(hide);

  return createPortal(
    <StyledOverlay onClick={handleOverlayClose}>
      <StyledModalContainer data-name="modal" ref={modalRef}>
        {children}
      </StyledModalContainer>
    </StyledOverlay>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
