import { Dispatch, RefObject, SetStateAction } from "react";

import { useClickOutside } from "../../../../common/hooks/useClickOutside/useClickOutside";
import { useOptionsMenuContent } from "../../hooks/useOptionsMenuContent";

import DeleteConfirm from "../../../../common/components/DeleteConfirm/DeleteConfirm";

import { MenuOptionButton } from "../OptionsMenu/OptionsMenu.styles";
import { MenuContentWrapper, MenuList, MenuListItem } from "./OptionsMenuContent.styles";

type Props = {
  jobId: string;
  menuRef: RefObject<HTMLDivElement>;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};
const OptionsMenuContent = ({ jobId, menuRef, showMenu, setShowMenu }: Props) => {
  useClickOutside(menuRef, () => setShowMenu(false));

  const {
    openAndEdit,
    showDeleteWarning,
    setShowDeleteWarning,
    deleteJobById,
    handleSelectJob,
  } = useOptionsMenuContent({ showMenu, setShowMenu });

  return (
    <MenuContentWrapper>
      <MenuList>
        <MenuListItem>
          <MenuOptionButton onClick={openAndEdit}>Edit Job</MenuOptionButton>
        </MenuListItem>
        <MenuListItem>
          <MenuOptionButton onClick={() => handleSelectJob(jobId)}>
            Mark Selected
          </MenuOptionButton>
        </MenuListItem>
        <MenuListItem>
          <MenuOptionButton onClick={() => setShowDeleteWarning({ deleteJob: true })}>
            Delete Job
          </MenuOptionButton>
        </MenuListItem>
      </MenuList>

      {showDeleteWarning.deleteJob && (
        <DeleteConfirm
          id={jobId}
          actionDelete={async (): Promise<void> => {
            await deleteJobById(jobId);
          }}
          redirect={false}
        />
      )}
    </MenuContentWrapper>
  );
};

export default OptionsMenuContent;
