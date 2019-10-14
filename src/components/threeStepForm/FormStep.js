import React from "react";
import PropTypes from "prop-types";

const FormStep = ({
  children,
  step,
  currentStep,
  disabled,
  onNext,
  onPrev
}) => {
  if (currentStep !== step) return null;
  return (
    <div className="form-step">
      {children}
      <div className="buttons">
        {step !== 0 && (
          <button type="button" onClick={() => onPrev()}>
            Prev
          </button>
        )}
        {step !== 2 && (
          <button type="button" disabled={disabled} onClick={() => onNext()}>
            Next
          </button>
        )}
        {step === 2 && (
          <button type="submit" disabled={disabled}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

FormStep.propTypes = {
  children: PropTypes.element.isRequired,
  step: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
};

export default FormStep;
