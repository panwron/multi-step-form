import React from "react";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

import cities from "../../data/cities.json";

const Select = ({ name, values }) => {
  return (
    <div>
      <Field name={name} component="select">
        <option value="">select city</option>
        {cities.map((c, i) => (
          <option key={i} value={c.city}>
            {c.city}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired
};

export default Select;
