import React from "react";
import PropTypes from "prop-types";

const StepsIndicator = ({ numOfSteps, currentStep }) => (
  <div className="steps-indicator">
    {Array.from({ length: numOfSteps }, (v, i) => (
      <span
        key={i}
        style={{
          backgroundColor: `${i === currentStep ? "#2ecc71" : "#ecf0f1"}`
        }}
      >
        {i + 1}
      </span>
    ))}
  </div>
);

StepsIndicator.propTypes = {
  numOfSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired
};

export default StepsIndicator;
