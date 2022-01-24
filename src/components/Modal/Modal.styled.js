import styled, { css } from "styled-components";
import { fadeInAnimation } from "../../styles/animations";

const fadeInAnimationModal = css`
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;

export const StyledModalContainer = styled.div`
  width: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid var(--clr-outline);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  & h2 {
    margin-bottom: 20px;
  }
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;

  ${fadeInAnimationModal}
`;
