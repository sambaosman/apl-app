import React, { useEffect, useState } from "react";
import {
  TextInput,
  PrimaryButton,
} from "../../StyledComponents/StyledComponents";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Button, FormGroup, Label, Input } from "reactstrap";

const RegistrationInputGroup = ({
  goBack,
  customField,
  customID,
  handleOnChange,
  setFormFields,
  registerFunction,
  formFields,
  setError,
  error,
  teams,
  setTeamMembers,
  history,
}) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const teamIDs = teams && teams.length && teams.map((team) => team.id);

  return (
    <React.Fragment>
      <div className="app-title">Register For APL</div>
      <div className="apl-about-message">
        APL is the most elite soccer league in the DMV. We are composed of
        champions and top contenders in the area that are ready to take the next
        step up.
      </div>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          function validateEmail(email) {
            var re =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
          if (!formFields.firstName) {
            errors.firstName = "Required";
          }
          if (!formFields.lastName) {
            errors.lastName = "Required";
          }
          if (!formFields.zip) {
            errors.zip = "Required";
          }
          if (!formFields.street) {
            errors.street = "Required";
          }
          if (!formFields.city) {
            errors.city = "Required";
          }
          if (!formFields.state) {
            errors.state = "Required";
          }
          if (!formFields.phoneNumber) {
            errors.phoneNumber = "Required";
          }
          if (!formFields.teamID) {
            errors.teamID = "Required";
          } else if (teamIDs && !teamIDs.includes(formFields.teamID)) {
            errors.teamID = "Not a valid Team ID";
          }
          if (customField && !formFields[customField.name]) {
            errors[customField.name] = "Required";
          }
          if (!formFields.email) {
            errors.email = "Required";
          } else if (!validateEmail(formFields.email)) {
            errors.email = "Not an email adress";
          }
          if (!formFields.password) {
            errors.password = "Required";
          }

          if (!formFields.confirmPassword) {
            errors.confirmPassword = "Required";
          } else if (formFields.confirmPassword !== formFields.password) {
            errors.confirmPassword = "Does not match";
          }
          return errors;
        }}
        render={({ handleSubmit, values, submitting, validating, valid }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Field name="firstName">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder="First Name"
                      name="firstName"
                      onChange={(e) => handleOnChange(e)}
                      invalid={meta.error && meta.touched}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            <FormGroup>
              {" "}
              <Field name="lastName">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder="Last Name"
                      name="lastName"
                      onChange={(e) => handleOnChange(e)}
                      invalid={meta.error && meta.touched}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            <FormGroup>
              <Field name="email">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={(e) => handleOnChange(e)}
                      invalid={meta.error && meta.touched}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            <FormGroup>
              <Field name="teamID">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder={customID.placeholder}
                      name={customID.name}
                      onChange={(e) => handleOnChange(e)}
                      invalid={meta.error && meta.touched}
                      value={formFields.teamID}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            {customField && (
              <FormGroup>
                <Field name={customField.name}>
                  {({ meta }) => (
                    <div>
                      <TextInput
                        placeholder={customField.placeholder}
                        name={customField.name}
                        onChange={(e) => handleOnChange(e)}
                        invalid={meta.error && meta.touched}
                      />
                      {meta.error && meta.touched && (
                        <span className="form-error">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </FormGroup>
            )}
            <FormGroup>
              <Field name="zip">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder="Zip Code"
                      name="zip"
                      onChange={(e) => handleOnChange(e)}
                      invalid={meta.error && meta.touched}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            <FormGroup>
              <Field name="city">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder="City"
                      name="city"
                      onChange={(e) => handleOnChange(e)}
                      invalid={meta.error && meta.touched}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            <FormGroup>
              <Field name="state">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder="State"
                      name="state"
                      invalid={meta.error && meta.touched}
                      onChange={(e) => handleOnChange(e)}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            <FormGroup>
              <Field name="street">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder="Street"
                      name="street"
                      invalid={meta.error && meta.touched}
                      onChange={(e) => handleOnChange(e)}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            <FormGroup>
              <Field name="phoneNumber">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder="Phone Number"
                      name="phoneNumber"
                      onChange={(e) => handleOnChange(e)}
                      invalid={meta.error && meta.touched}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>

            <FormGroup>
              <Field name="password">
                {({ meta }) => (
                  <div>
                    <TextInput
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={(e) => handleOnChange(e)}
                      invalid={meta.error && meta.touched}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            <FormGroup>
              <Field name="confirmPassword">
                {({ meta }) => (
                  <div>
                    <TextInput
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      onChange={(e) => handleOnChange(e)}
                      invalid={meta.error && meta.touched}
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </FormGroup>
            <div>Error: {error.message}</div>
            <PrimaryButton
              type="submit"
              onClick={() =>
                registerFunction(
                  formFields,
                  setFormFields,
                  setTeamMembers,
                  setError
                )
              }
            >
              Register
            </PrimaryButton>
          </form>
        )}
      />

      <div className="login-subsection">
        Already have an account?
        <Link to="/login">
          <span className="login-subsection-link" type="submit">
            Log in
          </span>
        </Link>
      </div>
      <div>
        <span className="back-button-container" onClick={() => history(-1)}>
          <span className="back-button-text">
            <span style={{ paddingRight: "10px" }}>
              <i className="fa-solid fa-arrow-left" />
            </span>
            Go Back
          </span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default RegistrationInputGroup;
