import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 400;
  color: var(--clr-primary);
`;

export const H2 = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 400;
  color: var(--clr-primary);
`;

export const H3 = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
  color: var(--clr-h3);
`;

type SpanProps = {
  multiline?: boolean;
};

export const Span = styled.span<SpanProps>`
  font-size: 16px;

  ${({ multiline }) => multiline && "white-space: pre-wrap;"}
`;

export const BenefitSpan = styled.span`
  padding: 2px 10px;
  border-radius: var(--border-radius);
  font-size: 12px;
  font-weight: bold;
  background-color: var(--clr-primary-rgba);
  color: var(--clr-primary);

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

type StatusSpanProps = {
  status: string;
};

export const StatusSpan = styled.span<StatusSpanProps>`
  padding: 2px 10px;
  border-radius: var(--border-radius);
  font-size: 12px;
  font-weight: bold;

  ${(props) => {
    switch (props.status) {
      case "Pending":
        return "background-color: rgba(223, 230, 233,0.3); color: #636e72;";
      case "Interview":
        return "background-color: rgba(255, 234, 167,0.3); color: #fdcb6e;";
      case "Rejected":
        return "background-color: rgba(255, 118, 117,0.3); color: #d63031;";
      case "Expired":
        return "background-color: rgba(99, 110, 114,0.3); color: #2d3436;";
      default:
        return;
    }
  }}
`;

type ErrorSpanProps = {
  inline?: boolean;
};

export const ErrorSpan = styled.span<ErrorSpanProps>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 110%;
  left: 0;
  font-size: 12px;
  color: var(--clr-error);

  ${({ inline }) => inline && "position: static;"}

  & svg {
    margin-right: 4px;
  }
`;

export const BoldSpanLarge = styled.span`
  font-weight: bold;
  font-size: 22px;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 15px;
`;
