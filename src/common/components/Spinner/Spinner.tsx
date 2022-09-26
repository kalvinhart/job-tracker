import { SpinnerWrapper, SpinnerMain } from "./Spinner.styled";

const Spinner = () => {
  return (
    <SpinnerWrapper data-testid="spinner">
      <SpinnerMain>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SpinnerMain>
    </SpinnerWrapper>
  );
};

export default Spinner;
