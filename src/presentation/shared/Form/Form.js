import { useForm } from "react-hook-form";
import { useJob } from "../../features/job-details/hooks/useJob";
import { useUi } from "../../hooks/useUi/useUi";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { useJobSlice } from "../../hooks/useJobSlice/useJobSlice";
import { useTableConfig } from "../../features/list-jobs/hooks/useTableConfig";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faExclamationCircle,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import {
  StyledInput,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledTextArea,
  StyledFormGroup,
  StyledButtonGroup,
  StyledSelect,
} from "../../styles/formStyles";
import { ErrorSpan } from "../../styles/fontStyles";
import { Button } from "../../styles/buttonStyles";

const Form = () => {
  const { editing, closeSidePanel } = useUi();
  const { loading, currentJob } = useJob();
  const { saveEditedJob, saveNewJob } = useJobSlice();
  const { statusOptions } = useTableConfig();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      benefits: editing ? currentJob.benefits : "",
      company: editing ? currentJob.company : "",
      contactName: editing ? currentJob.contactName : "",
      contactNumber: editing ? currentJob.contactNumber : "",
      date: editing ? new Date(currentJob.date).toISOString().slice(0, 10) : "",
      description: editing ? currentJob.description : "",
      interview:
        currentJob?.interview && editing
          ? new Date(currentJob.interview).toISOString()
          : "",
      location: editing ? currentJob.location : "",
      salary: editing ? currentJob.salary : "",
      status: currentJob?.status,
      title: editing ? currentJob.title : "",
    },
  });

  const onSubmit = (data, e) => {
    const newData = { ...data, user };

    if (editing) {
      saveEditedJob({ ...newData, id: currentJob.id });
    } else {
      saveNewJob(newData);
    }

    e.target.reset();
  };

  const cancelForm = () => {
    reset();
    closeSidePanel();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="title">Job Title:</StyledLabel>
          <StyledInput
            long
            type="text"
            id="title"
            placeholder="Job title..."
            {...register("title", { required: true, maxLength: 30 })}
          />
          {errors.title?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Job title is
              required.
            </ErrorSpan>
          )}
          {errors.title?.type === "maxLength" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </ErrorSpan>
          )}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="company">Company:</StyledLabel>
          <StyledInput
            long
            type="text"
            id="company"
            placeholder="Company..."
            {...register("company", { required: true, maxLength: 30 })}
          />
          {errors.company?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Company name is
              required.
            </ErrorSpan>
          )}
          {errors.company?.type === "maxLength" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </ErrorSpan>
          )}
        </StyledInputGroup>
      </StyledFormGroup>

      <StyledFormGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="location">Location:</StyledLabel>
          <StyledInput
            long
            type="text"
            id="location"
            placeholder="Location..."
            {...register("location", { required: true, maxLength: 20 })}
          />
          {errors.location?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Job location is
              required.
            </ErrorSpan>
          )}
          {errors.location?.type === "maxLength" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </ErrorSpan>
          )}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="salary">Salary:</StyledLabel>
          <StyledInput
            type="number"
            id="salary"
            placeholder="Salary..."
            {...register("salary", { required: true, maxLength: 5 })}
          />
          {errors.salary?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Job salary is
              required.
            </ErrorSpan>
          )}
          {errors.salary?.type === "maxLength" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </ErrorSpan>
          )}
        </StyledInputGroup>
      </StyledFormGroup>

      <StyledFormGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="benefits">Benefits:</StyledLabel>
          <StyledInput
            long
            type="text"
            id="benefits"
            placeholder="Benefits (Comma separated list)..."
            {...register("benefits")}
          />
        </StyledInputGroup>

        {editing && (
          <StyledInputGroup>
            <StyledLabel htmlFor="status">Status:</StyledLabel>
            <StyledSelect {...register("status")}>
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </StyledSelect>
          </StyledInputGroup>
        )}
      </StyledFormGroup>

      <StyledFormGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="contactName">Contact Name:</StyledLabel>
          <StyledInput
            type="text"
            id="contactName"
            placeholder="Contact name..."
            {...register("contactName", { maxLength: 20 })}
          />
          {errors.contactName?.type === "maxLength" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </ErrorSpan>
          )}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="contactNumber">Contact Number:</StyledLabel>
          <StyledInput
            type="number"
            id="contactNumber"
            placeholder="Contact number..."
            {...register("contactNumber", { maxLength: 11 })}
          />
          {errors.contactNumber?.type === "maxLength" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </ErrorSpan>
          )}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="date">Date Applied:</StyledLabel>
          <StyledInput
            type="date"
            id="date"
            placeholder="Date applied..."
            {...register("date", { required: true })}
          />
          {errors.date?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Date applied is
              required.
            </ErrorSpan>
          )}
        </StyledInputGroup>
      </StyledFormGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="description">Job Description:</StyledLabel>
        <StyledTextArea id="description" {...register("description")} />
      </StyledInputGroup>

      <StyledInput type="hidden" {...register("interview")} />

      <StyledButtonGroup>
        <Button type="submit" primary disabled={loading}>
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} size="lg" spin />
          ) : (
            <>
              <FontAwesomeIcon icon={faSave} size="lg" />
              {"Save"}
            </>
          )}
        </Button>
        <Button type="button" secondary onClick={cancelForm}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
          Cancel
        </Button>
      </StyledButtonGroup>
    </StyledForm>
  );
};

export default Form;
