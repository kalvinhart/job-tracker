import styled from "styled-components";

export const MenuContentWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background-color: var(--clr-grey-light);
  border: 1px solid var(--clr-outline);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  z-index: 999;
`;

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuListItem = styled.li``;
