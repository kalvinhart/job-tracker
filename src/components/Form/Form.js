import { useContext, useEffect } from "react";
import { JobContext } from "../../context/jobContext";
import { saveJob, saveUpdate } from "../../utilities/firebase";
import { useForm, Controller } from "react-hook-form";

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

import { statusOptions } from "../Table/tableConfig";

const Form = () => {
  useEffect(() => {
    console.log("rendered");
  }, []);

  const { editing, selectedJob, cancel } = useContext(JobContext);

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
    control,
    reset,
  } = useForm({
    defaultValues: {
      benefits: editing ? benefits : "",
      company: editing ? company : "",
      contactName: editing ? contactName : "",
      contactNumber: editing ? contactNumber : "",
      date: editing ? date.toDate().toISOString().slice(0, 10) : "",
      description: editing ? description : "",
      location: editing ? location : "",
      salary: editing ? salary : "",
      status: status,
      title: editing ? title : "",
    },
  });

  const onSubmit = (data, e) => {
    console.log(data);

    if (editing) {
      const updatedData = {
        ...data,
        id,
      };
      saveUpdate(updatedData);
    } else {
      saveJob(data);
    }

    e.target.reset();
  };

  const cancelForm = () => {
    reset();
    cancel();
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
            {...register("title", { required: true, maxLength: 20 })}
          />
          {errors.title?.type === "required" && (
            <ErrorSpan>Job title is required.</ErrorSpan>
          )}
          {errors.title?.type === "maxLength" && (
            <ErrorSpan>Maximum length exceeded.</ErrorSpan>
          )}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="company">Company:</StyledLabel>
          <StyledInput
            long
            type="text"
            id="company"
            placeholder="Company..."
            {...register("company", { required: true, maxLength: 20 })}
          />
          {errors.company?.type === "required" && (
            <ErrorSpan>Company name is required.</ErrorSpan>
          )}
          {errors.company?.type === "maxLength" && (
            <ErrorSpan>Maximum length exceeded.</ErrorSpan>
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
            <ErrorSpan>Job location is required.</ErrorSpan>
          )}
          {errors.location?.type === "maxLength" && (
            <ErrorSpan>Maximum length exceeded.</ErrorSpan>
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
            <ErrorSpan>Job salary is required.</ErrorSpan>
          )}
          {errors.salary?.type === "maxLength" && (
            <ErrorSpan>Maximum length exceeded.</ErrorSpan>
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
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <StyledSelect onChange={(e) => field.onChange(e)}>
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </StyledSelect>
              )}
            ></Controller>
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
            <ErrorSpan>Maximum length exceeded.</ErrorSpan>
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
            <ErrorSpan>Maximum length exceeded.</ErrorSpan>
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
            <ErrorSpan>Date applied is required.</ErrorSpan>
          )}
        </StyledInputGroup>
      </StyledFormGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="description">Job Description:</StyledLabel>
        <StyledTextArea id="description" {...register("description")} />
      </StyledInputGroup>

      <StyledButtonGroup>
        <Button type="submit" primary>
          Save
        </Button>
        <Button type="reset" tertiary onClick={cancelForm}>
          Cancel
        </Button>
      </StyledButtonGroup>
    </StyledForm>
  );
};

export default Form;
