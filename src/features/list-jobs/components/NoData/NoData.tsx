import { useUiSlice } from "../../../../common/hooks/useUiSlice/useUiSlice";

import { Background } from "../../../../common/styles/bgStyles";
import { Button } from "../../../../common/styles/buttonStyles";
import { H2, Paragraph } from "../../../../common/styles/fontStyles";
import { NoDataWrapper } from "./NoData.styles";

const NoData = () => {
  const { openSidePanel } = useUiSlice();

  return (
    <Background>
      <NoDataWrapper>
        <H2>No data found</H2>
        <Paragraph>You currently have no saved jobs.</Paragraph>
        <Button variant="primary" onClick={openSidePanel}>
          Add a job
        </Button>
      </NoDataWrapper>
    </Background>
  );
};

export default NoData;
