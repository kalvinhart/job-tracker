import { useUiSlice } from "../../../common/hooks/useUiSlice/useUiSlice";
import { useAppointmentView } from "../hooks/useAppointmentView";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

import AddAppointment from "../AddAppointment/AddAppointment";
import DeleteConfirm from "../../../components/DeleteConfirm/DeleteConfirm";

import { AppointmentViewWrapper } from "./AppointmentView.styled";

import { StyledBg } from "../../../common/styles/bgStyles";
import { Button } from "../../../common/styles/buttonStyles";
import { H3, StyledParagraph, BoldSpanLarge } from "../../../common/styles/fontStyles";
import { StyledButtonGroup } from "../../../common/styles/formStyles";

const AppointmentView = () => {
  const {
    showAppointmentModal,
    setShowAppointmentModal,
    showDeleteWarning: { deleteInterview },
    setShowDeleteWarning,
  } = useUiSlice();

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
              <Button
                variant="other"
                transparent
                onClick={() => setShowAppointmentModal(true)}
              >
                <FontAwesomeIcon icon={faEdit} />
                Edit
              </Button>
              <Button
                variant="other"
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
                actionDelete={removeInterview}
              />
            )}
          </>
        ) : (
          <>
            <StyledParagraph>
              You do not have an interview appointment for this role.
            </StyledParagraph>
            <Button variant="primary" onClick={() => setShowAppointmentModal(true)}>
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
