import { Link } from "react-router-dom";
import { Background } from "../../common/styles/bgStyles";
import { H2, Paragraph } from "../../common/styles/fontStyles";
import { StyledErrorPageWrapper } from "./ErrorPage.styles";

const ErrorPage = () => {
  return (
    <StyledErrorPageWrapper>
      <Background>
        <H2>Unexpected Error</H2>
        <Paragraph>
          Unforunately an error occurred whilst processing your last request. It might be
          that the content you are looking for does not exist.
        </Paragraph>
        <Paragraph>
          Please <Link to="/">return to the homepage</Link> and try again.
        </Paragraph>
      </Background>
    </StyledErrorPageWrapper>
  );
};

export default ErrorPage;
