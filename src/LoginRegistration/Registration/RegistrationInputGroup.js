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
  history,
  formFields,
  setError,
  error,
  teams,
  setTeamMembers,
  teamMembers,
  userType,
}) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const doesEmailAlreadyExist = (email) => {
    let memberEmails = teamMembers.map((member) => member.email);
    return memberEmails.includes(email);
  };

  const isTooManyMembers = (userType) => {
    let filteredTeamMembers =
      teamMembers &&
      teamMembers.filter((member) => member.teamsID === formFields.teamID);
    let userFilteredTeamMembers =
      filteredTeamMembers &&
      filteredTeamMembers.filter(
        (member) => member.teamMemberType === userType
      );
    return (
      userFilteredTeamMembers &&
      userFilteredTeamMembers.length > //adds maximum members to a team
        //maximum of 4 managers, 22 players, and 4 guest players
        (userType === "manager"
          ? 4
          : userType === "player"
          ? 22
          : userType === "guestPlayer"
          ? 4
          : 100)
    );
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
          if (!formFields.dob) {
            errors.dob = "Required";
          }
          if (!formFields.teamID) {
            errors.teamID = "Required";
          } else if (
            teamIDs &&
            !teamIDs.includes(formFields.teamID) &&
            formFields.teamID !== "admin1234"
          ) {
            errors.teamID = "Not a valid Team ID";
          } else if (isTooManyMembers(userType)) {
            errors.teamID = `Too many ${
              userType !== "guestPlayer" ? userType : "guest player"
            }s`;
          }

          if (customField && !formFields[customField.name]) {
            errors[customField.name] = "Required";
          }
          if (!formFields.email) {
            errors.email = "Required";
          } else if (!validateEmail(formFields.email)) {
            errors.email = "Not an email adress";
          } else if (doesEmailAlreadyExist(formFields.email)) {
            errors.email = "An account with the given email already exists";
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
              <Field name="dob">
                {({ meta }) => (
                  <div>
                    <TextInput
                      type="date"
                      placeholder="Date of Birth"
                      name="dob"
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
            {error && <div>Error: {error.message}</div>}{" "}
            <PrimaryButton
              type="submit"
              onClick={() => {
                valid &&
                  registerFunction(
                    formFields,
                    setFormFields,
                    setTeamMembers,
                    setError,
                    history
                  );
              }}
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
