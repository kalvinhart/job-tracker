import styled from "styled-components";
import { H1 } from "../../common/styles/fontStyles";

export const StyledHeader = styled.header`
  padding: 20px 20px 20px var(--side-panel-width);
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid var(--clr-outline);

  & ${H1} {
    margin-left: 20px;
  }
`;
