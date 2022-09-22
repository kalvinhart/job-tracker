import { useForm } from "react-hook-form";
import { useAddAppointment } from "../hooks/useAddAppointment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSpinner,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../../../components/Modal/Modal";
import { SpanError, H2, Paragraph } from "../../../common/styles/fontStyles";
import { ButtonGroup, Form, Input, InputGroup } from "../../../common/styles/formStyles";
import { Button } from "../../../common/styles/buttonStyles";

type FormValues = {
  interviewDate: string;
};

const AddAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const { loading, onSubmit, cancelForm, setShowAppointmentModal } =
    useAddAppointment(reset);

  return (
    <Modal hide={() => setShowAppointmentModal(false)}>
      <H2>Add an Interview</H2>

      <Paragraph>When is your interview date?</Paragraph>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Input
            long
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
