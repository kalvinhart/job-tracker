import styled, { css } from "styled-components";
import { fadeInAnimation } from "../../../styles/animations";

const fadeInAnimationDiv = css`
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
  animation-delay: var(--side-panel-animation-delay);
  animation-fill-mode: forwards;
`;

export const StyledSidePanelOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: 499;

  ${(props) => props.show && "visibility: visible; opacity: 1;"}
`;

export const SidePanelContainer = styled.div`
  position: fixed;
  z-index: 500;
  height: 100vh;
  width: var(--side-panel-width);
  padding: 20px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: var(--clr-outline);
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);

  background-color: white;
  box-shadow: var(--box-shadow);

  transition: width var(--side-panel-animation-speed) ease-in-out;

  ${(props) => props.show && "width: 800px; padding: 20px;"}
`;

export const SidePanelGroup = styled.div`
  ${(props) => (props.show ? "display: block;" : "display: none;")}

  ${(props) => props.animated && "visibility: hidden;"}
  ${(props) => props.animated && fadeInAnimationDiv}

  &:not(:first-of-type) {
    margin-top: 100px;
  }
`;
