import styled from "styled-components";
import { Background } from "../../../common/styles/bgStyles";
import { SpanBoldLarge } from "../../../common/styles/fontStyles";

export const JobViewContentWrapper = styled.div`
  & ${Background} {
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
  background-color: var(--clr-bg);
  border-radius: var(--border-radius);
`;

export const JobSpecificsGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 100px;
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
