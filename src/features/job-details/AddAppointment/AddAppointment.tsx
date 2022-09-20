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
import { ErrorSpan, H2, StyledParagraph } from "../../../common/styles/fontStyles";
import {
  StyledButtonGroup,
  StyledForm,
  StyledInput,
  StyledInputGroup,
} from "../../../common/styles/formStyles";
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

      <StyledParagraph>When is your interview date?</StyledParagraph>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputGroup>
          <StyledInput
            long
            type="datetime-local"
            id="interviewDate"
            {...register("interviewDate", { required: true })}
          />
          {errors.interviewDate?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" />
              Interview date is required
            </ErrorSpan>
          )}
        </StyledInputGroup>

        <StyledButtonGroup>
          <Button primary type="submit" disabled={loading}>
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} size="lg" spin />
            ) : (
              <>
                <FontAwesomeIcon icon={faSave} size="lg" />
                {"Save"}
              </>
            )}
          </Button>

          <Button type="reset" secondary onClick={cancelForm}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
            Cancel
          </Button>
        </StyledButtonGroup>
      </StyledForm>
    </Modal>
  );
};

export default AddAppointment;
