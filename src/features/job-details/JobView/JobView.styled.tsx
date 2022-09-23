import styled from "styled-components";
import { mediaSizes } from "../../../common/styles/media";

export const JobViewContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;
`;

export const JobViewDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
