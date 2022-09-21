import styled from "styled-components";
import { StyledBg } from "../../../common/styles/bgStyles";

export const JobViewContentWrapper = styled.div`
  & ${StyledBg} {
    width: 800px;
    margin: unset;
    margin-right: 20px;
  }
`;

export const StyledJobViewGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const StyledJobViewItem = styled.div`
  min-width: 180px;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 50px;
  }

  &:not(:nth-child(1)):last-child {
    margin-left: auto;
  }
`;
