import { Dispatch, RefObject, SetStateAction } from "react";

import { useClickOutside } from "../../../../common/hooks/useClickOutside/useClickOutside";
import { useOptionsMenuContent } from "../../hooks/useOptionsMenuContent";

import { MenuOptionButton } from "../OptionsMenu/OptionsMenu.styles";
import { MenuContentWrapper, MenuList, MenuListItem } from "./OptionsMenuContent.styles";
import { Job } from "../../../../common/types/job";

type Props = {
  job: Job;
  menuRef: RefObject<HTMLDivElement>;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setShowJobForm: Dispatch<SetStateAction<boolean>>;
  setShowDeleteWarning: Dispatch<SetStateAction<boolean>>;
};
const OptionsMenuContent = ({
  job,
  menuRef,
  showMenu,
  setShowMenu,
  setShowJobForm,
  setShowDeleteWarning,
}: Props) => {
  useClickOutside(menuRef, () => setShowMenu(false));

  const { handleSelectJob, handleOptionClick } = useOptionsMenuContent({
    showMenu,
    setShowMenu,
  });

  return (
    <MenuContentWrapper>
      <MenuList>
        <MenuListItem>
          <MenuOptionButton onClick={() => handleOptionClick(() => setShowJobForm(true))}>
            Edit Job
          </MenuOptionButton>
        </MenuListItem>
        <MenuListItem>
          <MenuOptionButton
            onClick={() => handleOptionClick(() => handleSelectJob(job.id!))}
          >
            Mark Selected
          </MenuOptionButton>
        </MenuListItem>
        <MenuListItem>
          <MenuOptionButton
            onClick={() => handleOptionClick(() => setShowDeleteWarning(true))}
          >
            Delete Job
          </MenuOptionButton>
        </MenuListItem>
      </MenuList>
    </MenuContentWrapper>
  );
};

export default OptionsMenuContent;
