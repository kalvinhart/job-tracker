import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ButtonTemplate = styled.button`
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;

  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
`;

export const MenuButton = styled(ButtonTemplate)`
  background-color: transparent;
  color: var(--clr-grey-dark);
  font-size: 16px;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    color: var(--clr-primary);
  }

  &:focus {
    border: 2px solid var(--clr-primary);
  }
`;

export const MenuOptionButton = styled(ButtonTemplate)`
  padding: 8px 10px;
  width: 100%;
  background-color: transparent;
  color: var(--clr-grey-dark);
  border: 2px solid transparent;
  border-radius: 0;

  &:hover,
  &:focus {
    color: var(--clr-primary);
    background-color: var(--clr-dark);
  }

  &:focus {
    border: 2px solid var(--clr-primary);
  }
`;
