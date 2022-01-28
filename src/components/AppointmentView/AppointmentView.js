import { useState } from "react";

import { AppointmentViewWrapper } from "./AppointmentView.styled";
import { StyledBg } from "../../styles/bgStyles";
import { Button } from "../../styles/buttonStyles";
import { H2, StyledParagraph, BoldSpan } from "../../styles/fontStyles";
import AddAppointment from "../AddAppointment/AddAppointment";
import { StyledButtonGroup } from "../../styles/formStyles";

const AppointmentView = ({ id, interview }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editing, setEditing] = useState(false);
  return (
    <AppointmentViewWrapper>
      <StyledBg>
        <H2>Interview Appointment</H2>
        {interview ? (
          <>
            <StyledParagraph>
              You have an interview for this position on: <BoldSpan>{interview}</BoldSpan>
            </StyledParagraph>
            <StyledButtonGroup>
              <Button tertiary>Edit</Button>
              <Button secondary onClick={() => setShowDeleteModal(true)}>
                Delete
              </Button>
            </StyledButtonGroup>
          </>
        ) : (
          <>
            <StyledParagraph>
              You do not have an interview appointment for this role.
            </StyledParagraph>
            <Button primary onClick={() => setShowAddModal(true)}>
              Add Appointment
            </Button>
            <AddAppointment
              id={id}
              show={showAddModal}
              hide={() => setShowAddModal(false)}
            />
          </>
        )}
      </StyledBg>
    </AppointmentViewWrapper>
  );
};

export default AppointmentView;
