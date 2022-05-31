import { useRef } from "react";

export const useModal = (hide) => {
  const modalRef = useRef();

  const handleOverlayClose = (e) => {
    if (modalRef.current === e.target.closest("div[data-name='modal']")) return;
    hide();
  };

  return {
    modalRef,
    handleOverlayClose: (e) => handleOverlayClose(e),
  };
};
