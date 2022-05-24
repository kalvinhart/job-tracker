import { Link } from "react-router-dom";
import { StyledBg } from "../../styles/bgStyles";
import { H2, StyledParagraph } from "../../styles/fontStyles";
import { StyledErrorPageWrapper } from "./ErrorPage.styles";

const ErrorPage = () => {
  return (
    <StyledErrorPageWrapper>
      <StyledBg>
        <H2>Unexpected Error</H2>
        <StyledParagraph>
          Unforunately an error occurred whilst processing your last request. It might be
          that the content you are looking for does not exist.
        </StyledParagraph>
        <StyledParagraph>
          Please <Link to="/">return to the homepage</Link> and try again.
        </StyledParagraph>
      </StyledBg>
    </StyledErrorPageWrapper>
  );
};

export default ErrorPage;
