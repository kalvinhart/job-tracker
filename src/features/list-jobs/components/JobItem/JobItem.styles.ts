import styled, { css } from "styled-components";
import { StatusSpan } from "../../../../common/styles/fontStyles";
import { mediaSizes } from "../../../../common/styles/media";

type WrapperProps = {
  selected: boolean;
};
export const JobItemWrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: white;
  border: 2px solid transparent;
  border-left: 4px solid transparent;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid var(--clr-primary);
      border-left: 4px solid var(--clr-primary);
      background-color: var(--clr-dark);
    `}

  & button {
    min-width: unset;
  }
`;

export const CancelSelectButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  font: inherit;
  color: var(--clr-grey-dark);
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: var(--clr-primary);
  }

  & svg {
    margin-right: 5px;
  }
`;

export const MainJobInfo = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.large}) {
    max-width: unset;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const JobTitleWrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & a {
    margin-bottom: 10px;
  }

  & ${StatusSpan} {
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
    align-items: center;

    & a {
      margin-bottom: 0;
    }

    & ${StatusSpan} {
      margin-bottom: 0;
    }
  }
`;

export const JobItemTitle = styled.span`
  font-size: 18px;
  font-weight: bold;

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-right: 10px;
  }
`;

export const SpanSalary = styled.span`
  font-size: 18px;

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-right: 5px;
  }
`;
