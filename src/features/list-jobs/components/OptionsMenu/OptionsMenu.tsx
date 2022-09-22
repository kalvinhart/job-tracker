import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MenuButton, MenuWrapper } from "./OptionsMenu.styles";
import { OptionsMenuContent } from "../OptionsMenuContent";
import { useOptionsMenu } from "../../hooks/useOptionsMenu";
import { Job } from "../../../../common/types/job";
import { JobForm } from "../../../job-form/JobForm";

type Props = {
  job: Job;
};
const OptionsMenu = ({ job }: Props) => {
  const {
    menuRef,
    showMenu,
    setShowMenu,
    handleToggleMenu,
    showJobForm,
    setShowJobForm,
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
          setShowMenu={setShowMenu}
          setShowJobForm={setShowJobForm}
        />
      )}

      {showJobForm && (
        <JobForm close={() => setShowJobForm(false)} editing={true} job={job} />
      )}
    </MenuWrapper>
  );
};

export default OptionsMenu;
