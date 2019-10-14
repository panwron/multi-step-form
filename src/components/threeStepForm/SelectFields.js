import React from "react";
import { Field, ErrorMessage } from "formik";

const Select = props => {
  return (
    <div>
      <Field name={props.name} component="select">
        <option value="">select city</option>
        <option value="red">NY</option>
        <option value="green">LA</option>
      </Field>
      <ErrorMessage name={props.name} />
    </div>
  );
};

export default Select;
