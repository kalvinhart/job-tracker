import styled from "styled-components";
import { InputGroup } from "../../common/styles/formStyles";
import { Button } from "../../common/styles/buttonStyles";

export const StyledBackgroundDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-bg);
`;

export const StyledForm = styled.form`
  padding: 20px;
  width: 600px;
  margin-bottom: 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  & h2 {
    margin-bottom: 40px;
  }

  & ${InputGroup}, & ${Button} {
    margin-bottom: 20px;
  }

  & ${Button} {
    margin-top: 30px;
  }
`;
