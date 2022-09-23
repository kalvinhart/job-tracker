import styled from "styled-components";

export const Form = styled.form`
  margin-top: 20px;
`;

export const FormContentWrapper = styled.div`
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  display: block;
  color: var(--clr-primary);
  margin-bottom: 5px;
`;

export const Input = styled.input`
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
