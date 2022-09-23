import styled from "styled-components";
import { Background } from "../../../common/styles/bgStyles";
import { SpanBoldLarge } from "../../../common/styles/fontStyles";
import { mediaSizes } from "../../../common/styles/media";

export const AppointmentViewWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

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

    @media screen and (min-width: ${mediaSizes.large}) {
      min-width: 300px;
      max-width: 320px;
      margin-bottom: 0;
    }
  }
`;
