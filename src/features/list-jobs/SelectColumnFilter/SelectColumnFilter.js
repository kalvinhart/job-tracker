import { useSelectColumnFilter } from "./useSelectColumnFilter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../../common/styles/buttonStyles";
import FilterOptions from "../FilterOptions/FilterOptions";

const SelectColumnFilter = (props) => {
  const { coords, showFilter, filterButtonRef, handleFilterClick, setShowFilter } =
    useSelectColumnFilter();

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
