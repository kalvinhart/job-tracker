import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../styles/buttonStyles";
import { Span } from "../../styles/fontStyles";
import { StyledUserInfoWrapper } from "./UserInfo.styled";

type UserInfoProps = {
  signOut: () => void;
};

const UserInfo = ({ signOut }: UserInfoProps) => {
  return (
    <StyledUserInfoWrapper>
      <Span>Welcome!</Span>
      <Button primary onClick={signOut}>
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
        Sign Out
      </Button>
    </StyledUserInfoWrapper>
  );
};

export default UserInfo;
