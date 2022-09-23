import styled, { css } from "styled-components";

type ButtonProps = {
  variant: "primary" | "secondary" | "danger" | "transparent" | "icon";
  visible?: boolean;
  loading?: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: 5px 20px;
  min-width: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  }

  & svg {
    margin-right: 5px;
  }

  ${(props) =>
    props.variant === "primary" &&
    css`
      display: flex;
      align-items: center;
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
    props.variant === "secondary" &&
    css`
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
    props.variant === "danger" &&
    css`
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
    props.variant === "transparent" &&
    css`
      min-width: unset;
      padding: 2px;
      background-color: transparent;
    `}

    ${(props) =>
    props.variant === "icon" &&
    css`
      min-width: unset;
      padding: 2px;
      background-color: transparent;
      color: var(--clr-primary);

      & svg {
        margin-right: 0;
      }
    `} 
    
    ${({ loading }) =>
    loading &&
    css`
      & svg {
        margin-right: 0;
      }
    `}
`;
