import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 120px;
`;

export const StyledFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  display: block;
  color: var(--clr-primary);
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  width: 180px;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  border: 2px solid var(--clr-dark);
  font-family: inherit;
  outline: none;
  ${(props) => props.long && "width: 300px;"}

  &:focus {
    border: 2px solid var(--clr-primary);
  }
`;

export const StyledSelect = styled.select`
  padding: 5px 10px;
  border: 2px solid var(--clr-dark);
  border-radius: var(--border-radius);
  font-family: inherit;
  outline: none;

  &:focus {
    border: 2px solid var(--clr-primary);
  }
`;

export const StyledTextArea = styled.textarea`
  width: 600px;
  height: 100px;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  border: 2px solid var(--clr-dark);
  font-family: inherit;
  outline: none;
  resize: vertical;

  &:focus {
    border: 2px solid var(--clr-primary);
  }
`;
