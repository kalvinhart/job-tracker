import styled from "styled-components";
import { StyledBg } from "../../../styles/bgStyles";
import { BoldSpanLarge } from "../../../styles/fontStyles";

export const AppointmentViewWrapper = styled.div`
  width: 350px;

  & ${StyledBg} {
    min-width: unset;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h3 {
      margin-bottom: 20px;
      align-self: flex-start;
    }

    & ${BoldSpanLarge} {
      margin-bottom: 15px;
    }
  }
`;
