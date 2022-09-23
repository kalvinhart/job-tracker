import styled from "styled-components";
import { mediaSizes } from "../../common/styles/media";

export const StyledContainer = styled.main`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${mediaSizes.med}) {
    max-width: 600px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    max-width: 1000px;
  }
`;
