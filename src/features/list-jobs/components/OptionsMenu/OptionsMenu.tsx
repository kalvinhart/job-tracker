import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuButton, MenuWrapper } from "./OptionsMenu.styles";
import { OptionsMenuContent } from "../OptionsMenuContent";
import { useOptionsMenu } from "../../hooks/useOptionsMenu";
import { DeleteConfirm } from "../../../../common/components/DeleteConfirm";
import { JobForm } from "../../../job-form/JobForm";

import { Job } from "../../../../common/types/job";

type Props = {
  job: Job;
};
const OptionsMenu = ({ job }: Props) => {
  const {
    handleDelete,
    handleToggleMenu,
    menuRef,
    setShowDeleteWarning,
    setShowJobForm,
    setShowMenu,
    showDeleteWarning,
    showJobForm,
    showMenu,
  } = useOptionsMenu();

  return (
    <MenuWrapper ref={menuRef}>
      <MenuButton onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </MenuButton>

      {showMenu && (
        <OptionsMenuContent
          job={job}
          menuRef={menuRef}
          showMenu={showMenu}
          setShowDeleteWarning={setShowDeleteWarning}
          setShowMenu={setShowMenu}
          setShowJobForm={setShowJobForm}
        />
      )}

      {showJobForm && (
        <JobForm close={() => setShowJobForm(false)} editing={true} job={job} />
      )}

      {showDeleteWarning && (
        <DeleteConfirm
          id={job.id!}
          actionDelete={async () => await handleDelete(job.id!)}
          redirect={false}
          hide={() => setShowDeleteWarning(false)}
        />
      )}
    </MenuWrapper>
  );
};

export default OptionsMenu;
