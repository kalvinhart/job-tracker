import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuButton, MenuWrapper } from "./OptionsMenu.styles";
import { OptionsMenuContent } from "../OptionsMenuContent";
import { useOptionsMenu } from "../../hooks/useOptionsMenu";

type Props = {
  jobId: string;
};
const OptionsMenu = ({ jobId }: Props) => {
  const { menuRef, showMenu, setShowMenu, handleToggleMenu } = useOptionsMenu();

  return (
    <MenuWrapper ref={menuRef}>
      <MenuButton onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </MenuButton>

      {showMenu && (
        <OptionsMenuContent
          jobId={jobId}
          menuRef={menuRef}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      )}
    </MenuWrapper>
  );
};

export default OptionsMenu;
