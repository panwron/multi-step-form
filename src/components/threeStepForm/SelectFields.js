import React from "react";
import { Field } from "formik";

const Select = props => {
  return (
    <Field name={props.name} component="select">
      <option value="">select city</option>
      <option value="red">NY</option>
      <option value="green">LA</option>
    </Field>
  );
};

export default Select;
