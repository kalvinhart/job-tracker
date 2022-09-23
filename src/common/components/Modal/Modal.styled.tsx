import styled, { css } from "styled-components";
import { fadeInAnimation } from "../../styles/animations";
import { mediaSizes } from "../../styles/media";

const fadeInAnimationModal = css`
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;

export const Overlay = styled.div`
  position: fixed;
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

export const ModalContainer = styled.div`
  width: 90%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid var(--clr-outline);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  & h2 {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 600px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px;
  background-color: transparent;
  font: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  color: var(--clr-grey-dark);
  transition: color 0.2s ease-in-out, border 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: var(--clr-primary);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--clr-primary);
  }
`;

export const ModalHiddenButton = styled.button`
  background-color: transparent;
  border: none;
`;
