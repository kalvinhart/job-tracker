import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { saveEditedJob, setCurrentJob } from "../../../slices/jobSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSpinner,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../../shared/Modal/Modal";
import { ErrorSpan, H2, StyledParagraph } from "../../../styles/fontStyles";
import {
  StyledButtonGroup,
  StyledForm,
  StyledInput,
  StyledInputGroup,
} from "../../../styles/formStyles";
import { Button } from "../../../styles/buttonStyles";
import { setShowAppointmentModal } from "../../../slices/uiSlice";

const AddAppointment = () => {
  const dispatch = useDispatch();
  const { loading, currentJob } = useSelector((state) => state.job);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      ...currentJob,
      interview: new Date(data.interviewDate).getTime(),
      status: "Interview",
    };

    dispatch(saveEditedJob(newData));
    dispatch(setCurrentJob(newData));
  };

  const cancelForm = () => {
    reset();
    dispatch(setShowAppointmentModal(false));
  };

  return (
    <Modal hide={() => dispatch(setShowAppointmentModal(false))}>
      <H2>Add an Interview</H2>
      <StyledParagraph>When is your interview date?</StyledParagraph>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputGroup>
          <StyledInput
            long
            type="datetime-local"
            id="interviewDate"
            name="interviewDate"
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
