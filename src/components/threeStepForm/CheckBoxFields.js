import React from "react";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const Checkbox = ({ name, value }) => (
  <Field name={name}>
    {({ field, form }) => (
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={field.value.includes(value)}
          onChange={() => {
            form.touched[name] = true;
            if (field.value.includes(value)) {
              const nextValue = field.value.filter(v => v !== value);
              form.setFieldValue(name, nextValue);
            } else {
              const nextValue = field.value.concat(value);
              form.setFieldValue(name, nextValue);
            }
          }}
        />
        {value}
      </label>
    )}
  </Field>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

const CheckBoxFields = ({ name, values }) => {
  return (
    <div>
      {values.map((value, i) => (
        <Checkbox key={i} name={name} value={value} />
      ))}
      <span style={{ display: "block" }} className="validationError">
        <ErrorMessage name="colors" />
      </span>
    </div>
  );
};

CheckBoxFields.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
};

export default CheckBoxFields;
