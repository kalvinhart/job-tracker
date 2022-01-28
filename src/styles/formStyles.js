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
  transition: border 0.2s ease-in-out;
  ${(props) => props.long && "width: 290px;"}

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
  transition: border 0.2s ease-in-out;

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

  transition: border 0.2s ease-in-out;

  &:focus {
    border: 2px solid var(--clr-primary);
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
  margin-left: auto;

  ${({ small }) => small && "width: 150px;"}
`;
