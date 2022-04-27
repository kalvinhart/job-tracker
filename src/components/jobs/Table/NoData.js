import { useDispatch } from "react-redux";

import { StyledBg } from "../../../styles/bgStyles";
import { StyledNoDataDiv } from "./Table.styled";
import { Button } from "../../../styles/buttonStyles";
import { H2, StyledParagraph } from "../../../styles/fontStyles";
import { openSidePanel } from "../../../slices/uiSlice";

const NoData = () => {
  const dispatch = useDispatch();

  return (
    <StyledBg>
      <StyledNoDataDiv>
        <H2>No data found</H2>
        <StyledParagraph>You currently have no saved jobs.</StyledParagraph>
        <Button primary onClick={() => dispatch(openSidePanel())}>
          Add a job
        </Button>
      </StyledNoDataDiv>
    </StyledBg>
  );
};

export default NoData;
