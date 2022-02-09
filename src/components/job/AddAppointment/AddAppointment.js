import { useContext, useState, useEffect } from "react";
import { JobContext } from "../../../context/jobContext";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

import Modal from "../../shared/Modal/Modal";
import { ErrorSpan, H2, StyledParagraph } from "../../../styles/fontStyles";
import {
  StyledButtonGroup,
  StyledForm,
  StyledInput,
  StyledInputGroup,
} from "../../../styles/formStyles";
import { Button } from "../../../styles/buttonStyles";

const AddAppointment = ({ id, show, hide }) => {
  const [loading, setLoading] = useState(false);
  const { updateInterviewDate } = useContext(JobContext);

  let isMounted;

  useEffect(() => {
    isMounted = true;
    console.log("useEffect: ", isMounted);

    return () => (isMounted = false);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data, e) => {
    setLoading(true);
    const { error } = await updateInterviewDate(id, data.interviewDate);

    if (!error) {
      e.target.reset();
      hide();
    } else {
      setLoading(false);
    }
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
            {loading ? <FontAwesomeIcon icon={faSpinner} size="lg" spin /> : "Save"}
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
