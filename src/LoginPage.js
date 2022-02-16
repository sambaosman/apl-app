import React, { useState } from "react";
import { Input, Button } from "./StyledComponents/StyledComponents";
import { Auth } from "aws-amplify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function signIn() {
    try {
      Auth.signIn({ email, password })
        .then((user) => {
          // Handle case where New Password is Required.
        })
        .catch((e) => {
          setErrorMessage(e.message);
        });
    } catch (e) {}
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();

    signIn();
  };

  return (
    <div className="login-container">
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
        <span
          className="login-subsection-link"
          type="submit"
          onClick={{ handleFormSubmission }}
        >
          Sign Up
        </span>
      </div>
      <div>
        <Button>Log in</Button>
      </div>
      <div>{errorMessage}</div>
    </div>
  );
};

export default LoginPage;
