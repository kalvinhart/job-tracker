import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import { useHeader } from "./useHeader";
import { useMediaQuery } from "../../common/hooks/useMediaQuery/useMediaQuery";

import { HeaderContainer, StyledHeader } from "./Header.styled";
import { H1 } from "../../common/styles/fontStyles";
import { Button } from "../../common/styles/buttonStyles";
import { mediaSizes } from "../../common/styles/media";

const Header = () => {
  const { signOut } = useHeader();
  const notMobile = useMediaQuery(`(min-width: ${mediaSizes.small})`);

  return (
    <StyledHeader>
      <HeaderContainer>
        <Link to="/">
          <H1>Job Application Tracker</H1>
        </Link>
        <Button variant={notMobile ? "primary" : "icon"} onClick={signOut}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" />
          {notMobile ? "Sign Out" : ""}
        </Button>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
