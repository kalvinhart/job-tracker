import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";
import { useUiSlice } from "../../../common/hooks/useUiSlice/useUiSlice";
import { useJobListContext } from "./useJobListContext";

type Props = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};
export const useOptionsMenuContent = ({ showMenu, setShowMenu }: Props) => {
  const { deleteJobById } = useJobSlice();
  const { openAndEdit, showDeleteWarning, setShowDeleteWarning } = useUiSlice();
  const { handleSelectJob } = useJobListContext();

  const handleEscKeypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMenu(false);
      }
    },
    [setShowMenu]
  );

  useEffect(() => {
    if (showMenu) {
      window.addEventListener("keydown", handleEscKeypress);
    }

    return () => window.removeEventListener("keydown", handleEscKeypress);
  }, [showMenu, handleEscKeypress]);

  return {
    deleteJobById,
    openAndEdit,
    showDeleteWarning,
    setShowDeleteWarning,
    handleSelectJob,
  };
};
