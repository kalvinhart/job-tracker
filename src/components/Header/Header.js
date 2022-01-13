import { Link } from "react-router-dom";

import { StyledHeader } from "./Header.styled";
import { H1 } from "../../styles/fontStyles";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <H1>Job Application Tracker</H1>
      </Link>
    </StyledHeader>
  );
};

export default Header;
