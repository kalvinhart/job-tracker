import { useRef, useState } from "react";

export const useOptionsMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return {
    showMenu,
    setShowMenu,
    handleToggleMenu,
    menuRef,
  };
};
