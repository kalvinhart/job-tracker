import { useState, useContext } from "react";
import { JobContext } from "../../../context/jobContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import { AppointmentViewWrapper } from "./AppointmentView.styled";
import { StyledBg } from "../../../styles/bgStyles";
import { Button } from "../../../styles/buttonStyles";
import { H3, StyledParagraph, BoldSpanLarge } from "../../../styles/fontStyles";
import AddAppointment from "../AddAppointment/AddAppointment";
import { StyledButtonGroup } from "../../../styles/formStyles";
import DeleteConfirm from "../../shared/DeleteConfirm/DeleteConfirm";

const AppointmentView = ({ id, interview }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const { removeInterview } = useContext(JobContext);

  const enableEditing = () => {
    setEditing(true);
    setShowAddModal(true);
  };

  const cancelEditing = () => {
    setEditing(false);
    setShowAddModal(false);
  };

  console.log(interview);
  const interviewDate = interview.toDate().toDateString();
  const interviewTime = interview.toDate().toLocaleTimeString();

  return (
    <AppointmentViewWrapper>
      <StyledBg>
        <H3>Interview Appointment</H3>
        {interview ? (
          editing ? (
            <>
              <StyledParagraph>Choose a new interview date.</StyledParagraph>
              <AddAppointment id={id} show={showAddModal} hide={cancelEditing} />
            </>
          ) : (
            <>
              <StyledParagraph>
                You have an interview for this position on:
              </StyledParagraph>
              <BoldSpanLarge>{interviewDate}</BoldSpanLarge>
              <StyledParagraph>at:</StyledParagraph>
              <BoldSpanLarge>{interviewTime}</BoldSpanLarge>
              <StyledButtonGroup small>
                <Button transparent onClick={enableEditing}>
                  <FontAwesomeIcon icon={faEdit} />
                  Edit
                </Button>
                <Button transparent onClick={() => setShowDeleteModal(true)}>
                  <FontAwesomeIcon icon={faTrash} />
                  Delete
                </Button>
              </StyledButtonGroup>
              <DeleteConfirm
                redirect={false}
                show={showDeleteModal}
                hide={() => setShowDeleteModal(false)}
                id={id}
                actionDelete={removeInterview}
                setShowDeleteModal={setShowDeleteModal}
              />
            </>
          )
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
