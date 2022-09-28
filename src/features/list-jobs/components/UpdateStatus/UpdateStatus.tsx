import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent } from "react";
import { Button } from "../../../../common/styles/buttonStyles";
import {
  ButtonGroup,
  Form,
  InputGroup,
  Label,
  Select,
} from "../../../../common/styles/formStyles";
import { JOB_STATUS } from "../../../../config/jobStatus";
import { useUpdateStatus } from "../../hooks/useUpdateStatus";
import { UpdateStatusWrapper } from "./UpdateStatus.styles";

type Props = {
  close: () => void;
  currentStatus: string;
  jobId: string;
};
const UpdateStatus = ({ jobId, close, currentStatus }: Props) => {
  const { handleUpdateStatus, setNewStatus } = useUpdateStatus({
    id: jobId,
    close,
    currentStatus,
  });

  return (
    <UpdateStatusWrapper>
      <Form onSubmit={(e: SyntheticEvent) => handleUpdateStatus(e)}>
        <InputGroup>
          <Label>New Status:</Label>
          <Select
            defaultValue={currentStatus}
            onChange={(e: SyntheticEvent) =>
              setNewStatus((e.target as HTMLSelectElement).value)
            }
          >
            {JOB_STATUS.map((status) => (
              <option value={status}>{status}</option>
            ))}
          </Select>
        </InputGroup>
        <ButtonGroup>
          <Button variant="primary" type="submit">
            <FontAwesomeIcon icon={faSave} size="lg" />
            Save
          </Button>
          <Button variant="secondary" type="button" onClick={() => close()}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
            Cancel
          </Button>
        </ButtonGroup>
      </Form>
    </UpdateStatusWrapper>
  );
};

export default UpdateStatus;
