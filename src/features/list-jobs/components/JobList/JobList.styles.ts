import styled, { css } from "styled-components";
import { Button } from "../../../../common/styles/buttonStyles";

export const JobListWrapper = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`;

export const JobListHeader = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  & ${Button} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    min-width: 140px;
  }
`;

export const JobListButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`;

type ButtonProps = {
  selected: boolean;
};
export const JobListTabButton = styled.button<ButtonProps>`
  padding: 10px 15px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font: inherit;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.2s ease-in-out, border 0.2s ease-in-out;

  ${(props) =>
    props.selected &&
    css`
      border-bottom: 2px solid var(--clr-primary);
    `}

  &:hover,
  &:focus {
    color: var(--clr-primary);
    border-bottom: 2px solid var(--clr-primary);
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const JobListDeleteButtonsWrapper = styled.div`
  display: flex;

  & button:first-of-type {
    margin-right: 10px;
  }
`;

export const JobListContent = styled.div`
  display: flex;
  flex-direction: column;
`;
