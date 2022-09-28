import Modal from "../../../../common/components/Modal/Modal";
import UpdateStatus from "../UpdateStatus/UpdateStatus";

type Props = {
  close: () => void;
  currentStatus: string;
  jobId: string;
};
const UpdateStatusModal = (props: Props) => {
  return (
    <Modal hide={props.close}>
      <UpdateStatus {...props} />
    </Modal>
  );
};

export default UpdateStatusModal;
