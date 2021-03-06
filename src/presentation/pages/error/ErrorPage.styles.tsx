import styled from "styled-components";
import { StyledBg } from "../../styles/bgStyles";
import { H2 } from "../../styles/fontStyles";

export const StyledErrorPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;

  & ${StyledBg} {
    & ${H2} {
      margin-bottom: 20px;
    }

    & a {
      color: var(--clr-primary);
    }
  }
`;
