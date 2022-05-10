import { useRef, useState } from "react";

export const useSelectColumnFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const filterButtonRef = useRef();

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterClick = () => {
    const { top, left } = filterButtonRef.current.getBoundingClientRect();
    setCoords({ top, left });
    toggleShowFilter();
  };

  return {
    coords,
    showFilter,
    filterButtonRef,
    handleFilterClick: () => handleFilterClick(),
    setShowFilter: (option) => setShowFilter(option),
  };
};
