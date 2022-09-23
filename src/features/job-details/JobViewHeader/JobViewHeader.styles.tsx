import styled from "styled-components";
import { mediaSizes } from "../../../common/styles/media";

export const JobViewHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: ${mediaSizes.large}) {
    justify-content: flex-start;
  }
`;

export const JobViewHeaderGroup = styled.div`
  display: flex;
  align-items: center;

  & *:not(:last-child) {
    margin-right: 10px;
  }
`;
