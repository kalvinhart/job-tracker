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
import { Job } from "../../../common/types/job";

type Props = {
  job: Job;
};
const AppointmentView = ({ job }: Props) => {
  const {
    removeInterview,
    setShowAppointmentModal,
    setShowDeleteInterviewWarning,
    showAppointmentModal,
    showDeleteInterviewWarning,
  } = useAppointmentView(job);

  return (
    <AppointmentViewWrapper>
      <Background>
        <H3>Interview Appointment</H3>
        {job.interview ? (
          <>
            <Paragraph>You have an interview for this position on:</Paragraph>
            <SpanBoldLarge>{toDateString(+job.interview)}</SpanBoldLarge>
            <Paragraph>at:</Paragraph>
            <SpanBoldLarge>{formatTime(+job.interview)}</SpanBoldLarge>
            <ButtonGroup small>
              <Button variant="transparent" onClick={() => setShowAppointmentModal(true)}>
                <FontAwesomeIcon icon={faEdit} />
                Edit
              </Button>
              <Button
                variant="transparent"
                onClick={() => setShowDeleteInterviewWarning(true)}
              >
                <FontAwesomeIcon icon={faTrash} />
                Delete
              </Button>
            </ButtonGroup>
            {showAppointmentModal && (
              <AddAppointment job={job} close={() => setShowAppointmentModal(false)} />
            )}
            {showDeleteInterviewWarning && (
              <DeleteConfirm
                redirect={false}
                actionDelete={removeInterview}
                hide={() => setShowDeleteInterviewWarning(false)}
              />
            )}
          </>
        ) : (
          <>
            <Paragraph>You do not have an interview appointment for this role.</Paragraph>
            <Button variant="primary" onClick={() => setShowAppointmentModal(true)}>
              <FontAwesomeIcon icon={faPlus} />
              Add Appointment
            </Button>
            {showAppointmentModal && (
              <AddAppointment job={job} close={() => setShowAppointmentModal(false)} />
            )}
          </>
        )}
      </Background>
    </AppointmentViewWrapper>
  );
};

export default AppointmentView;
