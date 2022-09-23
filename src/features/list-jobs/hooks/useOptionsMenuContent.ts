import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useJobListContext } from "./useJobListContext";

type Props = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};
export const useOptionsMenuContent = ({ showMenu, setShowMenu }: Props) => {
  const { handleSelectJob } = useJobListContext();

  const handleEscKeypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMenu(false);
      }
    },
    [setShowMenu]
  );

  const handleOptionClick = (callback: Function) => {
    callback();
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      window.addEventListener("keydown", handleEscKeypress);
    }

    return () => window.removeEventListener("keydown", handleEscKeypress);
  }, [showMenu, handleEscKeypress]);

  return {
    handleSelectJob,
    handleOptionClick,
  };
};
