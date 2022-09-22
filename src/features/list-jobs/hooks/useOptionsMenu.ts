import { useRef, useState } from "react";

export const useOptionsMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return {
    showMenu,
    setShowMenu,
    showJobForm,
    setShowJobForm,
    handleToggleMenu,
    menuRef,
  };
};
