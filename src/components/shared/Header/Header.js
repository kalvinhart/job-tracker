import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

import { Link, useNavigate } from "react-router-dom";

import UserInfo from "../UserInfo/UserInfo";

import { StyledHeader } from "./Header.styled";
import { H1 } from "../../../styles/fontStyles";
import { useDispatch } from "react-redux";
import { clearJobState } from "../../../slices/jobSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { signOut } = useContext(AuthContext);

  const signUserOut = () => {
    signOut();
    dispatch(clearJobState());
    navigate("/signin");
  };

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
