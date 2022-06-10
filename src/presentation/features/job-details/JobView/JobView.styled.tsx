import styled from "styled-components";

export const JobViewContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;

  & h2 {
    margin-left: 20px;
  }

  & button:last-child {
    margin-right: 20px;
  }
`;

export const JobViewDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
