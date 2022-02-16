import React from "react";
import { Input, PrimaryButton } from "../../StyledComponents/StyledComponents";

const RegistrationInputGroup = ({
  customField,
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
      <Input
        placeholder="User Name"
        type="username"
        name="username"
        onChange={(e) => setFormFields(e)}
      />
      <Input
        placeholder="Last Name"
        type="lastName"
        name="lastName"
        onChange={(e) => setFormFields(e)}
      />
      <Input
        placeholder="Email"
        type="email"
        name="email"
        onChange={(e) => setFormFields(e)}
      />
      <Input
        placeholder={customField}
        type={customField}
        name={customField}
        onChange={(e) => setFormFields(e)}
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        onChange={(e) => setFormFields(e)}
      />
      <Input
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
