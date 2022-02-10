import { useContext } from "react";
import { JobContext } from "../../../context/jobContext";
import { AuthContext } from "../../../context/authContext";

import { Link, useNavigate } from "react-router-dom";

import UserInfo from "../UserInfo/UserInfo";

import { StyledHeader } from "./Header.styled";
import { H1 } from "../../../styles/fontStyles";

const Header = () => {
  const navigate = useNavigate();

  const { clearAllJobStates } = useContext(JobContext);
  const { signOut } = useContext(AuthContext);

  const signUserOut = () => {
    signOut();
    clearAllJobStates();
    navigate("/signin");
  };

  return (
    <StyledHeader>
      <UserInfo signOut={signUserOut} />
      <Link to="/">
        <H1>Job Application Tracker</H1>
      </Link>
    </StyledHeader>
  );
};

export default Header;
