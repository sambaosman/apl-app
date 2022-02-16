import React, { useState } from "react";
import { Input, PrimaryButton } from "../../StyledComponents/StyledComponents";
import { Auth } from "aws-amplify";
import ChangePassword from "./ChangePassword";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPasswordRequired, setNewPasswordRequired] = useState(false);

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    let response = await Auth.signIn({ username: email, password });
    console.log("auth response", response);
    if (response.challengeName === "NEW_PASSWORD_REQUIRED") {
      setNewPasswordRequired(true);
    }
  };

  return (
    <div className="login-container">
      {newPasswordRequired ? (
        <ChangePassword />
      ) : (
        <React.Fragment>
          <div className="app-title">Log in</div>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-subsection">
            Don't have an account?
            <span className="login-subsection-link" type="submit">
              Sign Up
            </span>
          </div>
          <div>
            <PrimaryButton onClick={handleFormSubmission}>Log in</PrimaryButton>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default LoginPage;
