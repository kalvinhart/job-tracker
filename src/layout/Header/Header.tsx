import { Link } from "react-router-dom";
import { useHeader } from "./useHeader";

import { HeaderContainer, StyledHeader } from "./Header.styled";
import { H1 } from "../../common/styles/fontStyles";
import { Button } from "../../common/styles/buttonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { signOut } = useHeader();

  return (
    <StyledHeader>
      <HeaderContainer>
        <Link to="/">
          <H1>Job Application Tracker</H1>
        </Link>
        <Button variant="primary" onClick={signOut}>
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
          Sign Out
        </Button>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
