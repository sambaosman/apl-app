import React, { useState } from "react";
import {
  TextInput,
  PrimaryButton,
} from "../../StyledComponents/StyledComponents";
import { Auth } from "aws-amplify";
import ChangePassword from "./ChangePassword";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin, error, setError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPasswordRequired, setNewPasswordRequired] = useState(false);

  const history = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn({ username: email, password });
      history("/");
      onLogin();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="app-container">
      <div className="login-container">
        {newPasswordRequired ? (
          <ChangePassword />
        ) : (
          <React.Fragment>
            <div className="app-title">Log in</div>
            <TextInput
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-subsection">
              Don't have an account?
              <Link to="/register">
                <span className="login-subsection-link" type="submit">
                  Sign Up
                </span>
              </Link>
            </div>
            <PrimaryButton onClick={login}>Log in</PrimaryButton>
            {error && <div>Error: {error.message}</div>}{" "}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
