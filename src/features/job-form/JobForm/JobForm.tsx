import { Job } from "../../../common/types/job";
import Modal from "../../../common/components/Modal/Modal";
import { Form } from "../Form";
import { H3 } from "../../../common/styles/fontStyles";

type Props = {
  editing?: boolean;
  job?: Job;
  close: () => void;
};
const JobForm = ({ close, editing, job }: Props) => {
  return (
    <Modal hide={close}>
      <H3>{editing ? "Edit Job" : "Add a Job"}</H3>
      <Form close={close} editing={editing} job={job} />
    </Modal>
  );
};

export default JobForm;
