import React from "react";
import { Input, PrimaryButton } from "../../StyledComponents/StyledComponents";

const RegistrationInputGroup = ({ customField }) => {
  return (
    <div className="login-container">
      <div className="app-title">Register For APL</div>
      <div className="apl-about-message">
        APL is the most elite soccer league in the DMV. We are composed of
        champions and top contenders in the area that are ready to take the next
        step up.
      </div>
      <Input
        placeholder="First Name"
        type="firstName"
        name="firstName"
        // onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Last Name"
        type="lastName"
        name="lastName"
        // onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Email"
        type="email"
        name="email"
        // onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder={customField}
        type={customField}
        name={customField}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        // onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        name="confirmPassword"
        // onChange={(e) => setPassword(e.target.value)}
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
          <PrimaryButton>Register</PrimaryButton>
        </span>
      </div>
    </div>
  );
};

export default RegistrationInputGroup;
