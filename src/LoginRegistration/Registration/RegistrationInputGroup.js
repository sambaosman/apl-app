import React from "react";
import { Input, PrimaryButton } from "../../StyledComponents/StyledComponents";

const RegistrationInputGroup = () => {
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
        placeholder="Password"
        type="password"
        name="password"
        // onChange={(e) => setPassword(e.target.value)}
      />
      <div className="login-subsection">
        Already have an account?
        <span className="login-subsection-link" type="submit">
          Log in
        </span>
      </div>
      <div>
        <PrimaryButton>Register</PrimaryButton>
      </div>
    </div>
  );
};

export default RegistrationInputGroup;
