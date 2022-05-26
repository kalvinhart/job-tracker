import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 20px;
`;

export const StyledFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledInputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  display: block;
  color: var(--clr-primary);
  margin-bottom: 5px;
`;

type StyledInputProps = {
  long?: boolean;
};

export const StyledInput = styled.input<StyledInputProps>`
  width: 180px;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  border: 1px solid var(--clr-dark);
  font-family: inherit;
  outline: none;
  transition: border 0.2s ease-in-out;
  ${(props) => props.long && "width: 290px;"}

  &:hover,
  &:focus {
    border: 1px solid var(--clr-primary);
  }
`;

export const StyledSelect = styled.select`
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

export const StyledTextArea = styled.textarea`
  width: 600px;
  height: 100px;
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
`;

type StyledButtonGroupProps = {
  small?: boolean;
};

export const StyledButtonGroup = styled.div<StyledButtonGroupProps>`
  display: flex;
  justify-content: space-between;
  width: 230px;
  margin-top: 20px;
  margin-left: auto;

  ${({ small }) => small && "width: 150px;"}
`;
