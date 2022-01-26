import { useState } from "react";

import { AppointmentViewWrapper } from "./AppointmentView.styled";
import { StyledBg } from "../../styles/bgStyles";
import { Button } from "../../styles/buttonStyles";
import { H2, StyledParagraph } from "../../styles/fontStyles";

const AppointmentView = ({ interview }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editing, setEditing] = useState(false);
  return (
    <AppointmentViewWrapper>
      <StyledBg>
        <H2>Interview Appointment</H2>
        {interview ? (
          <>
            <StyledParagraph>
              You have an interview for this position on: {interview}
            </StyledParagraph>
            <Button tertiary>Edit</Button>
            <Button secondary>Delete</Button>
          </>
        ) : (
          <>
            <StyledParagraph>
              You do not have an interview appointment for this role.
            </StyledParagraph>
            <Button primary>Add Appointment</Button>
          </>
        )}
      </StyledBg>
    </AppointmentViewWrapper>
  );
};

export default AppointmentView;
