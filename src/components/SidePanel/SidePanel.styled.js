import styled from "styled-components";

export const SidePanelContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: var(--side-panel-width);
  padding: 20px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);

  background-color: var(--clr-secondary);
  box-shadow: var(--box-shadow);

  transition: width 0.2s ease-in-out;

  ${(props) => props.show && "width: 500px;"}
`;

export const SidePanelGroup = styled.div``;
