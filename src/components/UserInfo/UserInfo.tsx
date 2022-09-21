import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../common/styles/buttonStyles";
import { Span } from "../../common/styles/fontStyles";
import { StyledUserInfoWrapper } from "./UserInfo.styled";

type UserInfoProps = {
  signOut: () => void;
};

const UserInfo = ({ signOut }: UserInfoProps) => {
  return (
    <StyledUserInfoWrapper>
      <Span>Welcome!</Span>
      <Button variant="primary" onClick={signOut}>
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
        Sign Out
      </Button>
    </StyledUserInfoWrapper>
  );
};

export default UserInfo;
