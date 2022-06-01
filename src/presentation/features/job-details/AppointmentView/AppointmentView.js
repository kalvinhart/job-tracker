import { useUi } from "../../../hooks/useUiSlice/useUiSlice";
import { useAppointmentView } from "../hooks/useAppointmentView";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

import AddAppointment from "../AddAppointment/AddAppointment";
import DeleteConfirm from "../../../components/DeleteConfirm/DeleteConfirm";

import { AppointmentViewWrapper } from "./AppointmentView.styled";

import { StyledBg } from "../../../styles/bgStyles";
import { Button } from "../../../styles/buttonStyles";
import { H3, StyledParagraph, BoldSpanLarge } from "../../../styles/fontStyles";
import { StyledButtonGroup } from "../../../styles/formStyles";

const AppointmentView = () => {
  const {
    showAppointmentModal,
    setShowAppointmentModal,
    showDeleteWarning: { deleteInterview },
    setShowDeleteWarning,
  } = useUi();

  const { id, interview, interviewDate, interviewTime, removeInterview } =
    useAppointmentView();

  return (
    <AppointmentViewWrapper>
      <StyledBg>
        <H3>Interview Appointment</H3>
        {interview ? (
          <>
            <StyledParagraph>You have an interview for this position on:</StyledParagraph>
            <BoldSpanLarge>{interviewDate}</BoldSpanLarge>
            <StyledParagraph>at:</StyledParagraph>
            <BoldSpanLarge>{interviewTime}</BoldSpanLarge>
            <StyledButtonGroup small>
              <Button transparent onClick={() => setShowAppointmentModal(true)}>
                <FontAwesomeIcon icon={faEdit} />
                Edit
              </Button>
              <Button
                transparent
                onClick={() => setShowDeleteWarning({ deleteInterview: true })}
              >
                <FontAwesomeIcon icon={faTrash} />
                Delete
              </Button>
            </StyledButtonGroup>
            {showAppointmentModal && <AddAppointment />}
            {deleteInterview && (
              <DeleteConfirm
                redirect={false}
                hide={() => setShowDeleteWarning({ deleteInterview: false })}
                id={id}
                actionDelete={removeInterview}
              />
            )}
          </>
        ) : (
          <>
            <StyledParagraph>
              You do not have an interview appointment for this role.
            </StyledParagraph>
            <Button primary onClick={() => setShowAppointmentModal(true)}>
              <FontAwesomeIcon icon={faPlus} />
              Add Appointment
            </Button>
            {showAppointmentModal && <AddAppointment />}
          </>
        )}
      </StyledBg>
    </AppointmentViewWrapper>
  );
};

export default AppointmentView;
