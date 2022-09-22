import { Dispatch, RefObject, SetStateAction } from "react";

import { useClickOutside } from "../../../../common/hooks/useClickOutside/useClickOutside";
import { useOptionsMenuContent } from "../../hooks/useOptionsMenuContent";

import DeleteConfirm from "../../../../common/components/DeleteConfirm/DeleteConfirm";

import { MenuOptionButton } from "../OptionsMenu/OptionsMenu.styles";
import { MenuContentWrapper, MenuList, MenuListItem } from "./OptionsMenuContent.styles";
import { Job } from "../../../../common/types/job";

type Props = {
  job: Job;
  menuRef: RefObject<HTMLDivElement>;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setShowJobForm: Dispatch<SetStateAction<boolean>>;
};
const OptionsMenuContent = ({
  job,
  menuRef,
  showMenu,
  setShowMenu,
  setShowJobForm,
}: Props) => {
  useClickOutside(menuRef, () => setShowMenu(false));

  const {
    showDeleteWarning,
    setShowDeleteWarning,
    deleteJobById,
    handleSelectJob,
    handleOptionClick,
  } = useOptionsMenuContent({ showMenu, setShowMenu });

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
            onClick={() =>
              handleOptionClick(() => setShowDeleteWarning({ deleteJob: true }))
            }
          >
            Delete Job
          </MenuOptionButton>
        </MenuListItem>
      </MenuList>

      {showDeleteWarning.deleteJob && (
        <DeleteConfirm
          id={job.id!}
          actionDelete={async (): Promise<void> => {
            await deleteJobById(job.id!);
          }}
          redirect={false}
        />
      )}
    </MenuContentWrapper>
  );
};

export default OptionsMenuContent;
