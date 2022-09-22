import styled from "styled-components";

export const JobViewHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const JobViewHeaderGroup = styled.div`
  display: flex;
  align-items: center;

  & *:not(:last-child) {
    margin-right: 10px;
  }
`;
