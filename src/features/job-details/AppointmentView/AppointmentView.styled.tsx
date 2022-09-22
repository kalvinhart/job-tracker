import styled from "styled-components";
import { Background } from "../../../common/styles/bgStyles";
import { SpanBoldLarge } from "../../../common/styles/fontStyles";

export const AppointmentViewWrapper = styled.div`
  max-width: 320px;

  & ${Background} {
    display: flex;
    flex-direction: column;
    align-items: center;

    & h3 {
      margin-bottom: 20px;
      align-self: flex-start;
    }

    & ${SpanBoldLarge} {
      margin-bottom: 15px;
    }
  }
`;
