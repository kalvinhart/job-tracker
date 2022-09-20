import { useUiSlice } from "../../../common/hooks/useUiSlice/useUiSlice";

import { StyledBg } from "../../../common/styles/bgStyles";
import { StyledNoDataDiv } from "../Table/Table.styled";
import { Button } from "../../../common/styles/buttonStyles";
import { H2, Paragraph } from "../../../common/styles/fontStyles";

const NoData = () => {
  const { openSidePanel } = useUiSlice();

  return (
    <StyledBg>
      <StyledNoDataDiv>
        <H2>No data found</H2>
        <Paragraph>You currently have no saved jobs.</Paragraph>
        <Button variant="primary" onClick={openSidePanel}>
          Add a job
        </Button>
      </StyledNoDataDiv>
    </StyledBg>
  );
};

export default NoData;
