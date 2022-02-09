import styled from "styled-components";

export const StyledUserInfoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 40px;
  width: 280px;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 2px solid var(--clr-outline);
  border-top: none;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;
