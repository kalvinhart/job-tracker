import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../common/styles/buttonStyles";
import { UserInfoWrapper } from "./UserInfo.styled";

type UserInfoProps = {
  signOut: () => void;
};

const UserInfo = ({ signOut }: UserInfoProps) => {
  return (
    <UserInfoWrapper>
      <Button variant="primary" onClick={signOut}>
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
        Sign Out
      </Button>
    </UserInfoWrapper>
  );
};

export default UserInfo;
