import styled from "styled-components";
import { mediaSizes } from "./media";

export const Form = styled.form`
  margin-top: 20px;
`;

export const FormContentWrapper = styled.div`
  max-height: 500px;
  overflow-y: scroll;

  @media screen and (min-width: ${mediaSizes.large}) {
    overflow-y: unset;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-bottom: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${mediaSizes.large}) {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  color: var(--clr-primary);
  margin-bottom: 5px;
`;

type InputProps = {
  long?: boolean;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  border: 1px solid var(--clr-dark);
  font-family: inherit;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:hover,
  &:focus {
    border: 1px solid var(--clr-primary);
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 180px;
    ${(props) => props.long && "width: 250px;"}
  }
`;

export const Select = styled.select`
  padding: 5px 10px;
  border: 1px solid var(--clr-dark);
  border-radius: var(--border-radius);
  font-family: inherit;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:hover,
  &:focus {
    border: 1px solid var(--clr-primary);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  border: 1px solid var(--clr-dark);
  font-family: inherit;
  outline: none;
  resize: vertical;

  transition: border 0.2s ease-in-out;

  &:hover,
  &:focus {
    border: 1px solid var(--clr-primary);
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    height: 100px;
  }
`;

type ButtonGroupProps = {
  small?: boolean;
};

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  justify-content: space-between;
  width: 230px;
  margin-top: 20px;
  margin-left: auto;

  ${({ small }) => small && "width: 150px;"}
`;
