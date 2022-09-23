import { NoDataWrapper } from "./NoData.styles";
import { Background } from "../../../../common/styles/bgStyles";
import { H2, Paragraph } from "../../../../common/styles/fontStyles";

const NoData = () => {
  return (
    <Background>
      <NoDataWrapper>
        <H2>No data found</H2>
        <Paragraph>You currently have no saved jobs.</Paragraph>
      </NoDataWrapper>
    </Background>
  );
};

export default NoData;
