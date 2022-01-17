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
  return (
    <StyledForm>
      <StyledFormGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="title">Job Title:</StyledLabel>
          <StyledInput type="text" id="title" placeholder="Job title..." />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="location">Location:</StyledLabel>
          <StyledInput type="text" id="location" placeholder="Location..." />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="salary">Salary:</StyledLabel>
          <StyledInput type="number" id="salary" placeholder="Salary..." />
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
          />
        </StyledInputGroup>
      </StyledFormGroup>

      <StyledFormGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="contactName">Contact Name:</StyledLabel>
          <StyledInput type="text" id="contactName" placeholder="Contact name..." />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="contactNumber">Contact Number:</StyledLabel>
          <StyledInput type="number" id="contactNumber" placeholder="Contact number..." />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="date">Date Applied:</StyledLabel>
          <StyledInput type="date" id="date" placeholder="Date applied..." />
        </StyledInputGroup>
      </StyledFormGroup>

      <StyledInputGroup>
        <StyledLabel htmlFor="description">Job Description:</StyledLabel>
        <StyledTextArea id="description" />
      </StyledInputGroup>

      <StyledButtonGroup>
        <Button type="submit" primary>
          Save
        </Button>
        <Button tertiary>Cancel</Button>
      </StyledButtonGroup>
    </StyledForm>
  );
};

export default Form;
