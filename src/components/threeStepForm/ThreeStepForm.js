import React, { Component } from "react";
import { Formik, Form } from "formik";
import { string, object, array } from "yup";

import SelectFields from "./SelectFields";
import CheckBoxFields from "./CheckBoxFields";
import TextFields from "./TextFields";
import FormStep from "./FormStep";
import StepsIndicator from "./StepsIndicator";

const initialValues = {
  city: "",
  state: "",
  colors: [],
  firstName: "",
  secondName: "",
  email: ""
};

const validationShema = {
  state: string().required("required"),
  city: string().required("required"),
  colors: array().required("required"),
  firstName: string().required("required"),
  secondName: string().required("required"),
  email: string()
    .email("Invalid email address")
    .required("required")
};

class ThreeStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };
  }

  nextStep = () =>
    this.setState(({ currentStep }) => ({ currentStep: currentStep + 1 }));
  prevStep = () =>
    this.setState(({ currentStep }) => ({ currentStep: currentStep - 1 }));

  handleSubmit = values => {
    console.table(values);
    this.props.onSubmit(values);
  };

  render() {
    const { currentStep } = this.state;
    return (
      <div className="form-container">
        <StepsIndicator numOfSteps={3} currentStep={currentStep} />
        <Formik
          initialValues={initialValues}
          validationSchema={object().shape(validationShema)}
          onSubmit={this.handleSubmit}
          render={({ values, errors, initialValues }) => (
            <Form>
              <FormStep
                step={0}
                currentStep={currentStep}
                onNext={this.nextStep}
                onPrev={this.prevStep}
                disabled={Boolean(
                  values === initialValues || (errors.city || errors.state)
                )}
              >
                <SelectFields stateFilter={values.state} />
              </FormStep>

              <FormStep
                step={1}
                currentStep={currentStep}
                onNext={this.nextStep}
                onPrev={this.prevStep}
                disabled={Boolean(errors.colors)}
              >
                <CheckBoxFields
                  name="colors"
                  values={["red", "green", "blue"]}
                />
              </FormStep>

              <FormStep
                step={2}
                currentStep={currentStep}
                onNext={this.nextStep}
                onPrev={this.prevStep}
                disabled={Boolean(
                  errors.firstName || errors.secondName || errors.email
                )}
              >
                <TextFields />
              </FormStep>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default ThreeStepForm;
