import styled, { css } from "styled-components";
import { loading1, loading2, loading3 } from "../../styles/animations";

const loading1Animation = css`
  animation: ${loading1} 0.6s infinite;
`;

const loading2Animation = css`
  animation: ${loading2} 0.6s infinite;
`;

const loading3Animation = css`
  animation: ${loading3} 0.6s infinite;
`;

export const SpinnerWrapper = styled.div`
  width: 200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid var(--clr-outline);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

export const SpinnerMain = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--clr-dark);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    left: 8px;
    ${loading1Animation}
  }
  & div:nth-child(2) {
    left: 8px;
    ${loading2Animation}
  }
  & div:nth-child(3) {
    left: 32px;
    ${loading2Animation}
  }
  & div:nth-child(4) {
    left: 56px;
    ${loading3Animation}
  }
`;
