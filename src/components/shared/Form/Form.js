import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { JobContext } from "../../../context/jobContext";
import { AuthContext } from "../../../context/authContext";
import { useForm } from "react-hook-form";

import {
  StyledInput,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledTextArea,
  StyledFormGroup,
  StyledButtonGroup,
  StyledSelect,
} from "../../../styles/formStyles";
import { ErrorSpan } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faExclamationCircle,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { statusOptions } from "../../../tableConfig";
import { toggleSidePanel } from "../../../slices/uiSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { editing, selectedJob, saveNewJob, saveEdit, cancel } = useContext(JobContext);
  const { userID } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const {
    benefits,
    company,
    contactName,
    contactNumber,
    date,
    description,
    id,
    interview,
    location,
    salary,
    status,
    title,
  } = selectedJob;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      benefits: editing ? benefits : "",
      company: editing ? company : "",
      contactName: editing ? contactName : "",
      contactNumber: editing ? contactNumber : "",
      date: editing ? date.toDate().toISOString().slice(0, 10) : "",
      description: editing ? description : "",
      interview: interview && editing ? interview.toDate().toISOString() : "",
      location: editing ? location : "",
      salary: editing ? salary : "",
      status,
      title: editing ? title : "",
    },
  });

  const onSubmit = (data, e) => {
    const newData = { ...data, userID };

    if (editing) {
      setLoading(true);
      saveEdit(id, newData);
    } else {
      setLoading(true);
      saveNewJob(newData);
    }

    e.target.reset();
    setLoading(false);
    dispatch(toggleSidePanel());
  };

  const cancelForm = () => {
    reset();
    dispatch(toggleSidePanel());
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
