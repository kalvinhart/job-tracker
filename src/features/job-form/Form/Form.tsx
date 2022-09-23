import { useForm } from "react-hook-form";
import { useForm as useMyForm } from "../hooks/useForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faExclamationCircle,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import {
  Input,
  Form as StyledForm,
  InputGroup,
  Label,
  TextArea,
  FormGroup,
  ButtonGroup,
  Select,
  FormContentWrapper,
} from "../../../common/styles/formStyles";
import { SpanError } from "../../../common/styles/fontStyles";
import { Button } from "../../../common/styles/buttonStyles";
import { Job } from "../../../common/types/job";

type Props = {
  editing?: boolean;
  job?: Job;
  close: () => void;
};
const Form = ({ editing, close, job }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Job>({
    defaultValues: {
      benefits: job?.benefits ?? "",
      company: job?.company ?? "",
      contactName: job?.contactName ?? "",
      contactNumber: job?.contactNumber ?? "",
      date: job?.date && new Date(job.date).toISOString().slice(0, 10),
      description: job?.description ?? "",
      interview: job?.interview ?? undefined,
      location: job?.location ?? "",
      salary: job?.salary ?? "",
      status: job?.status ?? undefined,
      title: job?.title ?? "",
    },
  });

  const { loading, onSubmit, cancelForm, statusOptions } = useMyForm({
    reset,
    close,
    job,
    editing,
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormContentWrapper>
        <FormGroup>
          <InputGroup>
            <Label htmlFor="title">Job Title:</Label>
            <Input
              long
              type="text"
              id="title"
              placeholder="Job title..."
              {...register("title", { required: true, maxLength: 40 })}
            />
            {errors.title?.type === "required" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Job title is
                required.
              </SpanError>
            )}
            {errors.title?.type === "maxLength" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
                exceeded.
              </SpanError>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="company">Company:</Label>
            <Input
              long
              type="text"
              id="company"
              placeholder="Company..."
              {...register("company", { required: true, maxLength: 30 })}
            />
            {errors.company?.type === "required" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Company name is
                required.
              </SpanError>
            )}
            {errors.company?.type === "maxLength" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
                exceeded.
              </SpanError>
            )}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <InputGroup>
            <Label htmlFor="location">Location:</Label>
            <Input
              long
              type="text"
              id="location"
              placeholder="Location..."
              {...register("location", { required: true, maxLength: 20 })}
            />
            {errors.location?.type === "required" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Job location is
                required.
              </SpanError>
            )}
            {errors.location?.type === "maxLength" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
                exceeded.
              </SpanError>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="salary">Salary:</Label>
            <Input
              type="number"
              id="salary"
              placeholder="Salary..."
              {...register("salary", { required: true, maxLength: 6 })}
            />
            {errors.salary?.type === "required" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Job salary is
                required.
              </SpanError>
            )}
            {errors.salary?.type === "maxLength" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
                exceeded.
              </SpanError>
            )}
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <InputGroup>
            <Label htmlFor="benefits">Benefits:</Label>
            <Input
              long
              type="text"
              id="benefits"
              placeholder="Benefits (Comma separated list)..."
              {...register("benefits")}
            />
          </InputGroup>

          {editing && (
            <InputGroup>
              <Label htmlFor="status">Status:</Label>
              <Select {...register("status")}>
                {statusOptions.map((option: string) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </InputGroup>
          )}
        </FormGroup>

        <FormGroup>
          <InputGroup>
            <Label htmlFor="contactName">Contact Name:</Label>
            <Input
              type="text"
              id="contactName"
              placeholder="Contact name..."
              {...register("contactName", { maxLength: 20 })}
            />
            {errors.contactName?.type === "maxLength" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
                exceeded.
              </SpanError>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="contactNumber">Contact Number:</Label>
            <Input
              type="number"
              id="contactNumber"
              placeholder="Contact number..."
              {...register("contactNumber", { maxLength: 11 })}
            />
            {errors.contactNumber?.type === "maxLength" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Maximum length
                exceeded.
              </SpanError>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="date">Date Applied:</Label>
            <Input
              type="date"
              id="date"
              placeholder="Date applied..."
              {...register("date", { required: true })}
            />
            {errors.date?.type === "required" && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Date applied is
                required.
              </SpanError>
            )}
          </InputGroup>
        </FormGroup>

        <InputGroup>
          <Label htmlFor="description">Job Description:</Label>
          <TextArea id="description" {...register("description")} />
        </InputGroup>

        <Input type="hidden" {...register("interview")} />
      </FormContentWrapper>

      <ButtonGroup>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} size="lg" spin />
          ) : (
            <>
              <FontAwesomeIcon icon={faSave} size="lg" />
              {"Save"}
            </>
          )}
        </Button>
        <Button type="button" variant="secondary" onClick={cancelForm}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
          Cancel
        </Button>
      </ButtonGroup>
    </StyledForm>
  );
};

export default Form;
