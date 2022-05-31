import styled, { css } from "styled-components";
import { fadeInAnimation } from "../../../styles/animations";

export const TableWrapper = styled.div`
  width: 1750px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledTableBorder = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid var(--clr-outline);
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
  justify-content: center;
  align-items: center;
`;

export const StyledTH = styled.th`
  padding: 5px 10px;
  color: var(--clr-grey-dark);
  background-color: white;

  /* hide the ID column */
  ${(props) => props.hideFirst && "&:first-of-type { display: none; }"}

  & svg {
    margin-left: 5px;
    color: var(--clr-primary);
  }
`;

export const StyledTR = styled.tr`
  height: 60px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border 0.15s ease-in-out;

  &:nth-of-type(even) {
    background-color: var(--clr-grey-light);
  }

  &:first-child {
    border-top: 1px solid var(--clr-outline);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--clr-outline);
  }

  &:hover,
  &:focus {
    border-left: 6px solid var(--clr-primary);
    background-color: var(--clr-row-hover);
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
  background-color: var(--clr-primary);
  border: none;
  border-radius: var(--border-radius);
  color: white;
  font-size: 12pt;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    background-color: grey;
    color: black;
    cursor: not-allowed;
  }
`;

const fadeInOverlay = css`
  animation-name: ${fadeInAnimation};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
`;

export const FilterOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  ${fadeInOverlay}
`;

export const FilterWrapper = styled.div`
  position: absolute;
  ${({ top, left }) => `top: ${top}px; left: ${left}px;`}
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: var(--clr-grey-light);
  border: 1px solid var(--clr-outline);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  transform: translate(-50%, 30px);

  & button {
    margin-bottom: 10px;
  }
`;

export const StyledFilterIconDiv = styled.div`
  & svg {
    ${({ isFiltered }) => isFiltered && "color: var(--clr-primary);"}
  }
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
