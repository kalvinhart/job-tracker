import { useDispatch, useSelector } from "react-redux";

import { setShowAppointmentModal, setShowDeleteWarning } from "../../../slices/uiSlice";
import { saveEditedJob } from "../../../slices/jobSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

import AddAppointment from "../AddAppointment/AddAppointment";
import DeleteConfirm from "../../shared/DeleteConfirm/DeleteConfirm";

import { AppointmentViewWrapper } from "./AppointmentView.styled";

import { StyledBg } from "../../../styles/bgStyles";
import { Button } from "../../../styles/buttonStyles";
import { H3, StyledParagraph, BoldSpanLarge } from "../../../styles/fontStyles";
import { StyledButtonGroup } from "../../../styles/formStyles";

const AppointmentView = () => {
  const dispatch = useDispatch();
  const {
    showAppointmentModal,
    showDeleteWarning: { deleteInterview },
  } = useSelector((state) => state.ui);

  const { currentJob } = useSelector((state) => state.job);

  const { id, interview } = currentJob;

  const interviewDate = new Date(interview).toDateString() ?? null;
  const interviewTime = new Date(interview).toLocaleTimeString() ?? null;

  const removeInterview = () => {
    const newData = {
      ...currentJob,
      interview: "",
      status: "Pending",
    };

    dispatch(saveEditedJob(newData));
  };

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
              <Button transparent onClick={() => dispatch(setShowAppointmentModal(true))}>
                <FontAwesomeIcon icon={faEdit} />
                Edit
              </Button>
              <Button
                transparent
                onClick={() => dispatch(setShowDeleteWarning({ deleteInterview: true }))}
              >
                <FontAwesomeIcon icon={faTrash} />
                Delete
              </Button>
            </StyledButtonGroup>
            {showAppointmentModal && <AddAppointment />}
            {deleteInterview && (
              <DeleteConfirm
                redirect={false}
                hide={() => dispatch(setShowDeleteWarning({ deleteInterview: false }))}
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
            <Button primary onClick={() => dispatch(setShowAppointmentModal(true))}>
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
