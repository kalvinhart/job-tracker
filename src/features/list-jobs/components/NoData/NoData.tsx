import { useUiSlice } from "../../../../common/hooks/useUiSlice/useUiSlice";

import { StyledBg } from "../../../../common/styles/bgStyles";
import { Button } from "../../../../common/styles/buttonStyles";
import { H2, Paragraph } from "../../../../common/styles/fontStyles";
import { NoDataWrapper } from "./NoData.styles";

const NoData = () => {
  const { openSidePanel } = useUiSlice();

  return (
    <StyledBg>
      <NoDataWrapper>
        <H2>No data found</H2>
        <Paragraph>You currently have no saved jobs.</Paragraph>
        <Button variant="primary" onClick={openSidePanel}>
          Add a job
        </Button>
      </NoDataWrapper>
    </StyledBg>
  );
};

export default NoData;
