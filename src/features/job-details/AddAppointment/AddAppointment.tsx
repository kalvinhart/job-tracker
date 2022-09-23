import { useForm } from "react-hook-form";
import { useAddAppointment } from "../hooks/useAddAppointment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSpinner,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../../../common/components/Modal/Modal";
import { SpanError, H2, Paragraph } from "../../../common/styles/fontStyles";
import { ButtonGroup, Form, Input, InputGroup } from "../../../common/styles/formStyles";
import { Button } from "../../../common/styles/buttonStyles";
import { Job } from "../../../common/types/job";

type FormValues = {
  interviewDate: string;
};

type Props = {
  job: Job;
  close: () => void;
};
const AddAppointment = ({ job, close }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const { loading, onSubmit, cancelForm } = useAddAppointment({
    job,
    reset,
    close,
  });

  return (
    <Modal hide={() => close()}>
      <H2>Add an Interview</H2>

      <Paragraph>When is your interview date?</Paragraph>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Input
            type="datetime-local"
            id="interviewDate"
            {...register("interviewDate", { required: true })}
          />
          {errors.interviewDate?.type === "required" && (
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" />
              Interview date is required
            </SpanError>
          )}
        </InputGroup>

        <ButtonGroup>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} size="lg" spin />
            ) : (
              <>
                <FontAwesomeIcon icon={faSave} size="lg" />
                {"Save"}
              </>
            )}
          </Button>

          <Button type="reset" variant="secondary" onClick={cancelForm}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
            Cancel
          </Button>
        </ButtonGroup>
      </Form>
    </Modal>
  );
};

export default AddAppointment;
