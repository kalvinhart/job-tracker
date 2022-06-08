import styled, { css } from "styled-components";
import { fadeInAnimation } from "./animations";

const fadeInAnimationCloseButton = css`
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
  animation-delay: var(--side-panel-animation-delay);
  animation-fill-mode: forwards;
`;

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  visible?: boolean;
  transparent?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: 5px 20px;
  min-width: 95px;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    background-color: var(--clr-primary-dark);

    & svg {
      margin-right: 0;
    }
  }

  ${(props) =>
    props.primary &&
    `
  background-color: var(--clr-primary);
  color: white;
  border: 1px solid var(--clr-primary);

  &:hover,
  &:focus {
    background-color: white;
    color: var(--clr-primary);
  }
  `}

  ${(props) =>
    props.secondary &&
    `
    background-color: white;
    color: var(--clr-primary);
    border: 1px solid var(--clr-primary);
    
    &:hover,
    &:focus {
      background-color: var(--clr-primary);
      color: white;
    }
    `}
  
  ${(props) =>
    props.danger &&
    `
    background-color: white;
    color: var(--clr-danger);
    border: 1px solid var(--clr-danger);

    
    &:hover,
    &:focus {
      background-color: var(--clr-danger);
      color: white;
    }
    `}

    ${(props) =>
    (props.primary || props.secondary || props.danger || props.transparent) &&
    `
    & svg {
    margin-right: 10px;
  }
    `}

    /* styles for side-panel main button */
  ${(props) =>
    props.vertical &&
    `
    min-width: 30px;
    padding: 10px;
    background-color: transparent;
    font-size: 14px;
    font-weight: normal;
    color: var(--clr-grey-dark);
    white-space: pre-line;
    text-transform: uppercase;
    
    & span {
      display: block; 
      margin-bottom: 5px;
    }
  `}
  
  /* styles for side-panel close button */
  ${(props) =>
    props.horizontal &&
    `
    background-color: transparent;
    visibility: hidden;
    z-index: 2;
    font-size: 14px;
    font-weight: normal;
    color: var(--clr-grey-dark);
    text-transform: uppercase;
    position: absolute;
    top: 20px;
    right: 20px;
    
    
  `}
  
  ${(props) => props.horizontal && fadeInAnimationCloseButton}
  
  ${(props) =>
    props.visible
      ? "display: block;"
      : props.vertical || props.horizontal
      ? "display: none;"
      : ""}

  /* styles for transparent buttons */
  ${(props) =>
    props.transparent &&
    `
    min-width: unset;
    padding: 2px;
    background-color: transparent;
  `}
`;
