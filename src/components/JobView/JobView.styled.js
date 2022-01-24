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

export const JobViewContainer = styled.div`
  position: relative;
  width: 900px;
  margin: 0 auto;

  & a {
    position: absolute;
    top: -60px;
    left: 20px;
  }

  & h2 {
    margin-left: 20px;
  }

  & button:last-child {
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
