import { createPortal } from "react-dom";
import { useModal } from "./useModal";

import {
  Overlay,
  ModalContainer,
  ModalCloseButton,
  ModalHiddenButton,
} from "./Modal.styled";
import { useClickOutside } from "../../hooks/useClickOutside/useClickOutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type ModalProps = {
  hide: () => void;
  children: React.ReactNode;
};

const Modal = ({ hide, children }: ModalProps) => {
  const { modalRef, closeButtonRef, hiddenButtonRef, handleOverlayClose } =
    useModal(hide);
  useClickOutside(modalRef, hide);

  return createPortal(
    <Overlay onClick={handleOverlayClose}>
      <ModalContainer data-name="modal" ref={modalRef}>
        <ModalCloseButton ref={closeButtonRef} onClick={() => hide()}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </ModalCloseButton>
        {children}
        <ModalHiddenButton aria-hidden="true" ref={hiddenButtonRef} />
      </ModalContainer>
    </Overlay>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
