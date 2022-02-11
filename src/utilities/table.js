import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import {
  StyledTD,
  StyledTH,
  StyledTHWrapper,
  StyledFilterIconDiv,
} from "../components/jobs/Table/Table.styled";
import { StatusSpan, BenefitSpan } from "../styles/fontStyles";

import { statusOptions, centeredColumns } from "../tableConfig";

export const renderHeader = (column) => (
  <StyledTH hideFirst={true} {...column.getHeaderProps()}>
    <StyledTHWrapper>
      <div {...column.getSortByToggleProps()}>
        {column.render("Header")}
        <span>
          {column.isSorted ? (
            column.isSortedDesc ? (
              <FontAwesomeIcon icon={faSortDown} />
            ) : (
              <FontAwesomeIcon icon={faSortUp} />
            )
          ) : (
            <FontAwesomeIcon icon={faSort} />
          )}
        </span>
      </div>
      <StyledFilterIconDiv
        isFiltered={column.filterValue ? true : false}
        style={{ position: "relative" }}
      >
        {column.canFilter ? column.render("Filter") : null}
      </StyledFilterIconDiv>
    </StyledTHWrapper>
  </StyledTH>
);

export const renderCell = (cell) => {
  const center = centeredColumns.includes(cell.column.Header);
  const cellValue = cell.render("Cell").props.value;
  const status = statusOptions.includes(cellValue) ? cellValue : undefined;
  return (
    <StyledTD center={center} {...cell.getCellProps()}>
      {status ? (
        <StatusSpan status={status}>{status}</StatusSpan>
      ) : typeof cellValue === "object" ? (
        renderBenefits(cellValue, 2)
      ) : (
        cell.render("Cell")
      )}
    </StyledTD>
  );
};

const renderBenefits = (benefits, amountToShow) => {
  if (benefits.length === 0) return null;

  return benefits.map((benefit, i) => {
    benefit =
      i <= amountToShow - 1
        ? benefit.trim().charAt(0).toUpperCase() + benefit.trim().slice(1)
        : benefit;

    return i <= amountToShow - 1 ? (
      <BenefitSpan key={i}>{benefit.trim()}</BenefitSpan>
    ) : i < amountToShow + 1 ? (
      <BenefitSpan key={i}>{`+${benefits.length - amountToShow}`}</BenefitSpan>
    ) : (
      ""
    );
  });
};
