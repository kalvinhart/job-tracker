import { SubmitHandler, useForm } from "react-hook-form";
import { useForm as useMyForm } from "./useForm";

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
} from "../../common/styles/formStyles";
import { SpanError } from "../../common/styles/fontStyles";
import { Button } from "../../common/styles/buttonStyles";
import { Job } from "../../common/types/job";

const Form = () => {
  const {
    loading,
    currentJob,
    saveEditedJob,
    saveNewJob,
    editing,
    closeSidePanel,
    userID: user,
  } = useMyForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Job>({
    defaultValues: {
      benefits: editing ? currentJob!.benefits : "",
      company: editing ? currentJob!.company : "",
      contactName: editing ? currentJob!.contactName : "",
      contactNumber: editing ? currentJob!.contactNumber : "",
      date: editing ? new Date(currentJob!.date).toISOString().slice(0, 10) : "",
      description: editing ? currentJob!.description : "",
      interview:
        currentJob?.interview && editing
          ? new Date(currentJob.interview).toISOString()
          : "",
      location: editing ? currentJob!.location : "",
      salary: editing ? currentJob!.salary : "",
      status: currentJob?.status,
      title: editing ? currentJob!.title : "",
    },
  });

  const statusOptions = ["Pending", "Interview", "Rejected", "Expired"];

  const onSubmit: SubmitHandler<Job> = (data: Job) => {
    const newData = { ...data, user };

    if (editing) {
      saveEditedJob({ ...newData, id: currentJob!.id });
    } else {
      saveNewJob(newData);
    }

    reset();
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
            {...register("title", { required: true, maxLength: 40 })}
          />
          {errors.title?.type === "required" && (
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Job title is
              required.
            </SpanError>
          )}
          {errors.title?.type === "maxLength" && (
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </SpanError>
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
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Company name is
              required.
            </SpanError>
          )}
          {errors.company?.type === "maxLength" && (
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </SpanError>
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
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Job location is
              required.
            </SpanError>
          )}
          {errors.location?.type === "maxLength" && (
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </SpanError>
          )}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="salary">Salary:</StyledLabel>
          <StyledInput
            type="number"
            id="salary"
            placeholder="Salary..."
            {...register("salary", { required: true, maxLength: 6 })}
          />
          {errors.salary?.type === "required" && (
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Job salary is
              required.
            </SpanError>
          )}
          {errors.salary?.type === "maxLength" && (
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </SpanError>
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
              {statusOptions.map((option: string) => (
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
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </SpanError>
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
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
              exceeded.
            </SpanError>
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
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Date applied is
              required.
            </SpanError>
          )}
        </StyledInputGroup>
      </StyledFormGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="description">Job Description:</StyledLabel>
        <StyledTextArea id="description" {...register("description")} />
      </StyledInputGroup>

      <StyledInput type="hidden" {...register("interview")} />

      <StyledButtonGroup>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} size="lg" spin />
          ) : (
            <>
              <FontAwesomeIcon icon={faSave} size="lg" />
              {"Save"}
            </>
          )}
        </Button>
        <Button type="button" variant="secondary" onClick={cancelForm}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
          Cancel
        </Button>
      </StyledButtonGroup>
    </StyledForm>
  );
};

export default Form;
