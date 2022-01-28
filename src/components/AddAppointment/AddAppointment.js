import { useContext, useState } from "react";
import { JobContext } from "../../context/jobContext";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal/Modal";
import { ErrorSpan, H2, StyledParagraph } from "../../styles/fontStyles";
import {
  StyledButtonGroup,
  StyledForm,
  StyledInput,
  StyledInputGroup,
} from "../../styles/formStyles";
import { Button } from "../../styles/buttonStyles";

const AddAppointment = ({ id, show, hide }) => {
  const [loading, setLoading] = useState(false);
  const { updateInterviewDate } = useContext(JobContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data, e) => {
    setLoading(true);

    try {
      await updateInterviewDate(id, data.interviewDate);
    } catch (e) {
      console.log(e.message);
    }
    e.target.reset();
    setLoading(false);
    hide();
  };

  const cancelForm = () => {
    reset();
    hide();
  };

  return (
    <Modal show={show} hide={hide}>
      <H2>Add an Interview</H2>
      <StyledParagraph>When is your interview date?</StyledParagraph>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputGroup>
          <StyledInput
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
            {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Save"}
          </Button>
          <Button type="reset" secondary onClick={cancelForm}>
            Cancel
          </Button>
        </StyledButtonGroup>
      </StyledForm>
    </Modal>
  );
};

export default AddAppointment;
