import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 1750px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledTableBorder = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid var(--clr-dark);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
`;

export const StyledTable = styled.table`
  width: 100%;
  background-color: white;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const StyledTHWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTH = styled.th`
  padding: 5px 10px;
  background-color: var(--clr-light);

  /* hide the ID column */
  ${(props) => props.hideFirst && "&:first-of-type { display: none; }"}

  & svg {
    margin-left: 5px;
  }
`;

export const StyledTR = styled.tr`
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  cursor: pointer;

  &:nth-of-type(even) {
    background-color: var(--clr-light);
  }

  &:first-child {
    border-top: 2px solid var(--clr-outline);
  }

  &:not(:last-child) {
    border-bottom: 2px solid var(--clr-outline);
  }

  &:hover {
    border-left: 6px solid var(--clr-primary);
    background-color: var(--clr-outline);
  }

  /* hide the ID column */
  & td:first-of-type {
    display: none;
  }
`;

export const StyledTD = styled.td`
  padding: 8px 10px;
  font-size: 15px;

  ${(props) => props.center && "text-align: center;"}
`;

export const StyledGlobalFilter = styled.div`
  padding: 5px 10px;
  width: 100%;
  text-align: left;

  & input {
    margin-left: 10px;
  }
`;

export const PaginationButton = styled.button`
  padding: 5px 10px;
  background-color: var(--clr-secondary);
  border: none;
  border-radius: var(--border-radius);
  color: var(--clr-primary);
  font-size: 12pt;
  font-weight: bold;

  &:disabled {
    color: grey;
  }
`;

export const FilterOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const FilterWrapper = styled.div`
  position: absolute;
  ${({ top, left }) => `top: ${top}px; left: ${left}px;`}
  padding: 10px;
  background-color: var(--clr-light);
  border: 2px solid var(--clr-outline);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  transform: translate(-50%, 30px);
`;

export const StyledNoDataDiv = styled.div`
  display: flex;
  flex-direction: column;

  & h2,
  & p {
    margin-bottom: 20px;
  }

  & button {
    align-self: flex-end;
  }
`;
