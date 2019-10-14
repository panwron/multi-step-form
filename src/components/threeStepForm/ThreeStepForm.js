import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { string, object } from "yup";

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
            firstName: string().required("required"),
            secondName: string().required("required")
          })}
          onSubmit={values => {
            console.log(values);
            this.setState({ submitedValues: values });
          }}
          render={() => (
            <Form>
              <Field name="firstName" />
              <Field name="secondName" />
              <button type="submit">submit</button>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default ThreeStepForm;
