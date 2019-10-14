import React from "react";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const Input = ({ name, label, type }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field type={type || "text"} id={name} name={name}></Field>
      <span className="validationError">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

const TextFields = () => (
  <div>
    <Input name="firstName" label="First name" />
    <Input name="secondName" label="Second name" />
    <Input name="email" type="email" label="Email" />
  </div>
);

export default TextFields;
