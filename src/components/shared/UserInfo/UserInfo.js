import { Button } from "../../../styles/buttonStyles";
import { Span } from "../../../styles/fontStyles";
import { StyledUserInfoWrapper } from "./UserInfo.styled";

const UserInfo = ({ signOut }) => {
  return (
    <StyledUserInfoWrapper>
      <Span>Welcome!</Span>
      <Button primary onClick={signOut}>
        Sign Out
      </Button>
    </StyledUserInfoWrapper>
  );
};

export default UserInfo;
