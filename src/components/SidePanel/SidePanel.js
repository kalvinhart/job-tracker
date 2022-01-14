import { useState } from "react";

import { Button } from "../../styles/buttonStyles";
import {
  SidePanelButtonGroup,
  SidePanelContainer,
  SidePanelGroup,
} from "./SidePanel.styled";
import { Span } from "../../styles/fontStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  StyledInput,
  StyledForm,
  StyledInputGroup,
  StyledLabel,
  StyledTextArea,
  StyledFormGroup,
} from "../../styles/formStyles";

const SidePanel = () => {
  const [show, setShow] = useState(false);

  return (
    <SidePanelContainer show={show}>
      <Button horizontal visible={show} onClick={() => setShow(false)}>
        <Span>C l o s e</Span>
        <FontAwesomeIcon icon={faTimes} className="cross-icon" size="lg" />
      </Button>
      <SidePanelGroup show={!show}>
        <Button vertical visible={!show} onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" size="lg" />
          <Span>A d d</Span>
          <Span> N e w</Span>
        </Button>
      </SidePanelGroup>

      <SidePanelGroup animated show={show}>
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
              <StyledInput
                type="number"
                id="contactNumber"
                placeholder="Contact number..."
              />
            </StyledInputGroup>
          </StyledFormGroup>

          <StyledInputGroup>
            <StyledLabel htmlFor="description">Job Description:</StyledLabel>
            <StyledTextArea id="description" />
          </StyledInputGroup>

          <SidePanelButtonGroup>
            <Button type="submit" primary>
              Save
            </Button>
            <Button tertiary>Cancel</Button>
          </SidePanelButtonGroup>
        </StyledForm>
      </SidePanelGroup>
    </SidePanelContainer>
  );
};

export default SidePanel;
