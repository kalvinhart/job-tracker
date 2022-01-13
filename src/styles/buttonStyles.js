import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  ${(props) =>
    props.vertical &&
    "background-color: transparent; font-size: 14px; font-weight: normal; color: white; white-space: pre-line; text-transform: uppercase;"}
  ${(props) => props.vertical && "& span { display: block; margin-bottom: 10px; }"}

  ${(props) => props.primary && "background-color: var(--clr-primary); color: white;"}
  ${(props) =>
    props.secondary &&
    "background-color: var(--clr-secondary); color: var(--clr-primary);"}
  ${(props) =>
    props.tertiary &&
    "background-color: var(--clr-tertiary); color: var(--clr-tertiary-text);"}

  &:hover,
  &:focus {
    ${(props) => props.primary && "border: 2px solid white;"}
    ${(props) => props.secondary && "border: 2px solid var(--clr-primary);"}
    ${(props) => props.tertiary && "border: 2px solid var(--clr-tertiary-text);"}
  }
`;
