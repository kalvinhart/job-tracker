import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../../styles/buttonStyles";
import FilterOptions from "./FilterOptions";

const SelectColumnFilter = (props) => {
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

  return (
    <>
      <Button
        transparent
        ref={filterButtonRef}
        onClick={handleFilterClick}
        aria-label="Filter"
      >
        <FontAwesomeIcon icon={faFilter} />
      </Button>

      {showFilter && (
        <FilterOptions {...props} coords={coords} hide={() => setShowFilter(false)} />
      )}
    </>
  );
};

export default SelectColumnFilter;
