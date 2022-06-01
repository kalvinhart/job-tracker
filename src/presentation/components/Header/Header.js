import { Link } from "react-router-dom";
import { useAuthActions } from "../../hooks/useAuthActions/useAuthActions";

import UserInfo from "../UserInfo/UserInfo";

import { StyledHeader } from "./Header.styled";
import { H1 } from "../../styles/fontStyles";

const Header = () => {
  const { signUserOut } = useAuthActions();

  return (
    <StyledHeader>
      <Link to="/">
        <H1>Job Application Tracker</H1>
      </Link>
      <UserInfo signOut={signUserOut} />
    </StyledHeader>
  );
};

export default Header;
