import styled from "styled-components";
import { Background } from "../../common/styles/bgStyles";
import { H2 } from "../../common/styles/fontStyles";

export const StyledErrorPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;

  & ${Background} {
    & ${H2} {
      margin-bottom: 20px;
    }

    & a {
      color: var(--clr-primary);
    }
  }
`;
