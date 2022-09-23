import styled from "styled-components";
import { mediaSizes } from "../../common/styles/media";

export const StyledHeader = styled.header`
  padding: 20px;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid var(--clr-outline);
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${mediaSizes.med}) {
      flex-direction: row;
    }
  }
`;
