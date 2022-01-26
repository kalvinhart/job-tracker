import styled from "styled-components";
import { StyledBg } from "../../styles/bgStyles";

export const AppointmentViewWrapper = styled.div`
  width: 350px;
  position: absolute;
  top: 0;
  right: -370px;

  & ${StyledBg} {
    min-width: unset;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
      margin-bottom: 20px;
    }
  }
`;
