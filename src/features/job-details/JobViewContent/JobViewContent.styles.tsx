import styled from "styled-components";
import { Background } from "../../../common/styles/bgStyles";
import { SpanBoldLarge } from "../../../common/styles/fontStyles";
import { mediaSizes } from "../../../common/styles/media";

export const JobViewContentWrapper = styled.div`
  width: 100%;
  margin-right: 20px;

  & ${Background} {
    width: 100%;
    max-width: 800px;
    margin-right: 20px;
  }
`;

export const JobViewGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const JobViewTitleWrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  & ${SpanBoldLarge} {
    margin-right: 10px;
  }
`;

export const JobSpecificsWrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background-color: var(--clr-bg);
  border-radius: var(--border-radius);

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
  }
`;

export const JobSpecificsGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    &:not(:last-child) {
      margin-right: 100px;
      margin-bottom: 0;
    }
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  align-items: flex-end;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & svg {
    margin-right: 10px;
    color: var(--clr-primary);
  }
`;

export const BenefitsGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
