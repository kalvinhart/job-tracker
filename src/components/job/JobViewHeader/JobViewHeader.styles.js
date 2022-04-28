import styled from "styled-components";

export const StyledJobViewHeadingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledJobViewHeadingGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & *:not(:last-child) {
    margin-right: 10px;
  }
`;
