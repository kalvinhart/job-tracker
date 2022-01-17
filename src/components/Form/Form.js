import { useContext } from "react";
import { JobContext } from "../../context/jobContext";

import {
  StyledInput,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledTextArea,
  StyledFormGroup,
  StyledButtonGroup,
} from "../../styles/formStyles";
import { Button } from "../../styles/buttonStyles";

const Form = () => {
  const { editing, selectedJob, cancel } = useContext(JobContext);

  const {
    benefits,
    company,
    contactName,
    contactNumber,
    date,
    description,
    interview,
    location,
    notes,
    salary,
    status,
    title,
  } = selectedJob;

  return (
    <StyledForm>
      <StyledFormGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="title">Job Title:</StyledLabel>
          <StyledInput
            type="text"
            id="title"
            placeholder="Job title..."
            defaultValue={editing ? title : ""}
          />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="location">Location:</StyledLabel>
          <StyledInput
            type="text"
            id="location"
            placeholder="Location..."
            defaultValue={editing ? location : ""}
          />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="salary">Salary:</StyledLabel>
          <StyledInput
            type="number"
            id="salary"
            placeholder="Salary..."
            defaultValue={editing ? salary : ""}
          />
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
            defaultValue={editing ? benefits : ""}
          />
        </StyledInputGroup>
      </StyledFormGroup>

      <StyledFormGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="contactName">Contact Name:</StyledLabel>
          <StyledInput
            type="text"
            id="contactName"
            placeholder="Contact name..."
            defaultValue={editing ? contactName : ""}
          />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="contactNumber">Contact Number:</StyledLabel>
          <StyledInput
            type="number"
            id="contactNumber"
            placeholder="Contact number..."
            defaultValue={editing ? contactNumber : ""}
          />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="date">Date Applied:</StyledLabel>
          <StyledInput
            type="date"
            id="date"
            placeholder="Date applied..."
            defaultValue={editing ? date : ""}
          />
        </StyledInputGroup>
      </StyledFormGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="description">Job Description:</StyledLabel>
        <StyledTextArea id="description" defaultValue={editing ? description : ""} />
      </StyledInputGroup>

      <StyledButtonGroup>
        <Button type="submit" primary>
          Save
        </Button>
        <Button tertiary onClick={cancel}>
          Cancel
        </Button>
      </StyledButtonGroup>
    </StyledForm>
  );
};

export default Form;
