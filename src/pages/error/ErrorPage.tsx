import { Link } from "react-router-dom";
import { StyledBg } from "../../common/styles/bgStyles";
import { H2, Paragraph } from "../../common/styles/fontStyles";
import { StyledErrorPageWrapper } from "./ErrorPage.styles";

const ErrorPage = () => {
  return (
    <StyledErrorPageWrapper>
      <StyledBg>
        <H2>Unexpected Error</H2>
        <Paragraph>
          Unforunately an error occurred whilst processing your last request. It might be
          that the content you are looking for does not exist.
        </Paragraph>
        <Paragraph>
          Please <Link to="/">return to the homepage</Link> and try again.
        </Paragraph>
      </StyledBg>
    </StyledErrorPageWrapper>
  );
};

export default ErrorPage;
