import { useRef, useState } from "react";
import { useJobContext } from "../../../common/hooks/useJobContext/useJobContext";

export const useOptionsMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { deleteJobById } = useJobContext();

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleDelete = (id: string) => {
    deleteJobById(id);
  };

  return {
    handleDelete,
    handleToggleMenu,
    menuRef,
    setShowDeleteWarning,
    setShowJobForm,
    setShowMenu,
    showDeleteWarning,
    showJobForm,
    showMenu,
  };
};
