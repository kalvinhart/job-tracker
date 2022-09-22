import { Job } from "../../../common/types/job";
import Modal from "../../../common/components/Modal/Modal";
import { Form } from "../Form";

type Props = {
  editing?: boolean;
  job?: Job;
  close: () => void;
};
const JobForm = ({ close, editing, job }: Props) => {
  return (
    <Modal hide={close}>
      <Form close={close} editing={editing} job={job} />
    </Modal>
  );
};

export default JobForm;
