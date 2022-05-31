import { createPortal } from "react-dom";
import { useFilterOptions } from "../../../hooks/useFilterOptions/useFilterOptions";

import { FilterWrapper, FilterOverlay } from "./Table.styled";
import { StyledSelect } from "../../../styles/formStyles";
import { Button } from "../../../styles/buttonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FilterOptions = ({
  hide,
  coords: { top, left },
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const { filterRef, options, handleOverlayClose, onSelectChange } = useFilterOptions(
    preFilteredRows,
    setFilter,
    id,
    hide
  );

  return createPortal(
    <FilterOverlay onClick={handleOverlayClose}>
      <FilterWrapper ref={filterRef} top={top} left={left} data-name="filter">
        <Button transparent onClick={hide}>
          Close
          <FontAwesomeIcon icon={faTimes} className="cross-icon" />
        </Button>
        <StyledSelect value={filterValue} onChange={onSelectChange}>
          <option value="">All</option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
      </FilterWrapper>
    </FilterOverlay>,
    document.getElementById("filter-root")
  );
};

export default FilterOptions;
