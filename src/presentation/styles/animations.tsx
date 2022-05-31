import { keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
  0% { visibility: visible; opacity: 0; }
  100% { visibility: visible; opactity: 1; }
`;

export const loading1 = keyframes`
0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const loading2 = keyframes`
0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

export const loading3 = keyframes`
0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
