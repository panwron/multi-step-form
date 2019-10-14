import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { string, object, array } from "yup";

import SelectFields from "./SelectFields";
import CheckBoxFields from "./CheckBoxFields";
import TextFields from "./TextFields";

class ThreeStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="form-container">
        <Formik
          initialValues={{
            city: "",
            state: "",
            colors: [],
            firstName: "",
            secondName: "",
            email: ""
          }}
          validationSchema={object().shape({
            state: string().required("required"),
            city: string().required("required"),
            colors: array().required("required"),
            firstName: string().required("required"),
            secondName: string().required("required"),
            email: string()
              .email("Invalid email address")
              .required("required")
          })}
          onSubmit={values => {
            console.log(values);
            this.setState({ submitedValues: values });
          }}
          render={({ values }) => (
            <Form>
              <SelectFields stateFilter={values.state} />
              <CheckBoxFields name="colors" values={["red", "green", "blue"]} />
              <TextFields />
              <button type="submit">submit</button>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default ThreeStepForm;
