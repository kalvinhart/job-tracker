import { useAppointmentView } from "../hooks/useAppointmentView";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

import AddAppointment from "../AddAppointment/AddAppointment";
import DeleteConfirm from "../../../common/components/DeleteConfirm/DeleteConfirm";

import { AppointmentViewWrapper } from "./AppointmentView.styled";

import { Background } from "../../../common/styles/bgStyles";
import { Button } from "../../../common/styles/buttonStyles";
import { H3, Paragraph, SpanBoldLarge } from "../../../common/styles/fontStyles";
import { ButtonGroup } from "../../../common/styles/formStyles";

import { formatTime, toDateString } from "../../../common/utilities/formatDate";

const AppointmentView = () => {
  const {
    interview,
    removeInterview,
    setShowAppointmentModal,
    setShowDeleteWarning,
    showAppointmentModal,
    showDeleteInterview,
  } = useAppointmentView();

  return (
    <AppointmentViewWrapper>
      <Background>
        <H3>Interview Appointment</H3>
        {interview ? (
          <>
            <Paragraph>You have an interview for this position on:</Paragraph>
            <SpanBoldLarge>{toDateString(+interview)}</SpanBoldLarge>
            <Paragraph>at:</Paragraph>
            <SpanBoldLarge>{formatTime(+interview)}</SpanBoldLarge>
            <ButtonGroup small>
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
            </ButtonGroup>
            {showAppointmentModal && <AddAppointment />}
            {showDeleteInterview && (
              <DeleteConfirm redirect={false} actionDelete={removeInterview} />
            )}
          </>
        ) : (
          <>
            <Paragraph>You do not have an interview appointment for this role.</Paragraph>
            <Button variant="primary" onClick={() => setShowAppointmentModal(true)}>
              <FontAwesomeIcon icon={faPlus} />
              Add Appointment
            </Button>
            {showAppointmentModal && <AddAppointment />}
          </>
        )}
      </Background>
    </AppointmentViewWrapper>
  );
};

export default AppointmentView;
