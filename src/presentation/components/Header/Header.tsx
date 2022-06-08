import { Link } from "react-router-dom";
import { useHeader } from "./useHeader";

import UserInfo from "../UserInfo/UserInfo";

import { StyledHeader } from "./Header.styled";
import { H1 } from "../../styles/fontStyles";

const Header = () => {
  const { signOut } = useHeader();

  return (
    <StyledHeader>
      <Link to="/">
        <H1>Job Application Tracker</H1>
      </Link>
      <UserInfo signOut={signOut} />
    </StyledHeader>
  );
};

export default Header;
