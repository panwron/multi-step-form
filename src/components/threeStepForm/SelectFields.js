import React from "react";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

import cities from "../../data/cities.json";

const states = [...new Set(cities.map(c => c.state))]; // extract states from cities data

const Select = ({ name, options }) => {
  return (
    <div>
      <Field name={name} component="select">
        <option value="">{`select ${name}`}</option>
        {options.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </Field>
      <span className="validationError">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

const SelectFields = ({ stateFilter }) => (
  <div className="select-container">
    <Select name="state" options={states} />
    <Select
      name="city"
      options={cities.filter(c => c.state === stateFilter).map(c => c.city)}
    />
  </div>
);

SelectFields.propTypes = {
  stateFilter: PropTypes.string.isRequired
};

export default SelectFields;
