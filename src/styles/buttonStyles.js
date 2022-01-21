import styled, { css } from "styled-components";
import { fadeInAnimation } from "./animations";

const fadeInAnimationCloseButton = css`
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
  animation-delay: var(--side-panel-animation-delay);
  animation-fill-mode: forwards;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  ${(props) => props.primary && "background-color: var(--clr-primary); color: white;"}

  ${(props) =>
    props.secondary &&
    "background-color: var(--clr-secondary); color: var(--clr-primary);"}
  
  ${(props) =>
    props.tertiary &&
    "background-color: var(--clr-tertiary); color: var(--clr-tertiary-text);"}

    /* styles for side-panel main button */
  ${(props) =>
    props.vertical &&
    "background-color: transparent; font-size: 14px; font-weight: normal; color: white; white-space: pre-line; text-transform: uppercase;"}
  
  ${(props) => props.vertical && "& span { display: block; margin-bottom: 10px; }"}

  /* styles for side-panel close button */
  ${(props) =>
    props.horizontal &&
    "background-color: transparent; visibility: hidden; z-index: 2; font-size: 14px; font-weight: normal; color: white; text-transform: uppercase; position: absolute; top: 20px; right: 20px;"}
  
  ${(props) => props.horizontal && fadeInAnimationCloseButton}

  ${(props) =>
    props.visible
      ? "display: block;"
      : props.vertical || props.horizontal
      ? "display: none;"
      : ""}

    /* styles for transparent buttons */
    ${(props) => props.transparent && "padding: 2px; background-color: transparent;"}
  
  &:hover,
  &:focus {
    ${(props) => props.primary && "border: 2px solid white;"}
    ${(props) => props.secondary && "border: 2px solid var(--clr-primary);"}
    ${(props) => props.tertiary && "border: 2px solid var(--clr-tertiary-text);"}
  }
`;
