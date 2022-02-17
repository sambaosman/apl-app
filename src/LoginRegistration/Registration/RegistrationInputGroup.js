import React from "react";
import {
  TextInput,
  PrimaryButton,
} from "../../StyledComponents/StyledComponents";

const RegistrationInputGroup = ({
  customField,
  customID,
  setFormFields,
  registerFunction,
}) => {
  return (
    <div className="login-container">
      <div className="app-title">Register For APL</div>
      <div className="apl-about-message">
        APL is the most elite soccer league in the DMV. We are composed of
        champions and top contenders in the area that are ready to take the next
        step up.
      </div>
      <TextInput
        placeholder="First Name"
        name="firstName"
        onChange={(e) => setFormFields(e)}
      />
      <TextInput
        placeholder="Last Name"
        name="lastName"
        onChange={(e) => setFormFields(e)}
      />
      <TextInput
        placeholder="Email"
        type="email"
        name="email"
        onChange={(e) => setFormFields(e)}
      />
      <TextInput
        placeholder={customField.placeholder}
        name={customField.name}
        onChange={(e) => setFormFields(e)}
      />
      <TextInput
        placeholder={customID.placeholder}
        name={customID.name}
        onChange={(e) => setFormFields(e)}
      />
      <TextInput
        placeholder="Password"
        type="password"
        name="password"
        onChange={(e) => setFormFields(e)}
      />
      <TextInput
        placeholder="Confirm Password"
        type="password"
        name="confirmPassword"
        onChange={(e) => setFormFields(e)}
      />
      <div className="login-subsection">
        Already have an account?
        <span className="login-subsection-link" type="submit">
          Log in
        </span>
      </div>
      <div>
        <span className="back-button-container">
          <span className="back-button-text">
            <span style={{ paddingRight: "10px" }}>
              <i class="fa-solid fa-arrow-left" />
            </span>
            Go Back
          </span>
          <PrimaryButton onClick={registerFunction}>Register</PrimaryButton>
        </span>
      </div>
    </div>
  );
};

export default RegistrationInputGroup;
