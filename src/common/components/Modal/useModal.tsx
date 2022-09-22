import React, { useCallback, useEffect, useRef } from "react";

export const useModal = (hide: () => void) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hiddenButtonRef = useRef<HTMLButtonElement>(null);

  const handleOverlayClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (modalRef.current === target.closest("div[data-name='modal']")) return;
    hide();
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        hide();
      }
    },
    [hide]
  );

  const handleFocus = (e: FocusEvent) => {
    closeButtonRef.current?.focus();
  };

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    const hiddenButton = hiddenButtonRef.current;
    hiddenButton?.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      hiddenButton?.removeEventListener("focus", handleFocus);
    };
  }, [handleKeyDown]);

  return {
    modalRef,
    closeButtonRef,
    hiddenButtonRef,
    handleOverlayClose: (e: React.MouseEvent<HTMLDivElement>) => handleOverlayClose(e),
  };
};
