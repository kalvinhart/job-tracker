import { useUiSlice } from "../../../hooks/useUiSlice/useUiSlice";

import { StyledBg } from "../../../styles/bgStyles";
import { StyledNoDataDiv } from "../Table/Table.styled";
import { Button } from "../../../styles/buttonStyles";
import { H2, StyledParagraph } from "../../../styles/fontStyles";

const NoData = () => {
  const { openSidePanel } = useUiSlice();

  return (
    <StyledBg>
      <StyledNoDataDiv>
        <H2>No data found</H2>
        <StyledParagraph>You currently have no saved jobs.</StyledParagraph>
        <Button primary onClick={openSidePanel}>
          Add a job
        </Button>
      </StyledNoDataDiv>
    </StyledBg>
  );
};

export default NoData;
