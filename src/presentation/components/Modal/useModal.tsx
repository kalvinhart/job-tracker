import React, { useRef } from "react";

export const useModal = (hide: () => void) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (modalRef.current === target.closest("div[data-name='modal']")) return;
    hide();
  };

  return {
    modalRef,
    handleOverlayClose: (e: React.MouseEvent<HTMLDivElement>) => handleOverlayClose(e),
  };
};
