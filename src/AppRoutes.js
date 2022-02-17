import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import RegisteredList from "./RegisteredList";
import AdminPage from "./AdminPage";
import { Amplify, Hub } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { submitForm, getForms, deleteForm } from "./RegistrationServices";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTeams } from "./TeamServices";
import awsExports from "./aws-exports";
import LoginPage from "./LoginRegistration/Login/LoginPage";
import Register from "./LoginRegistration/Registration/Register";
import RegistrationSelector from "./LoginRegistration/Registration/RegistrationSelector";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

Amplify.configure(awsExports);

const AppRoutes = ({ loggedIn, setLoggedIn, signOut }) => {
  const [forms, setForms] = useState([]);
  const [teams, setTeams] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [teamsID, setTeamsID] = useState();
  const [authStatus, setAuthStatus] = useState("");

  useEffect(() => {
    getForms(setForms);
    getTeams(setTeams);
  }, []);
  const listener = (data) => {
    setAuthStatus(data.payload.event);
  };

  Hub.listen("auth", listener);

  const onLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div>
            {loggedIn ? (
              <button onClick={signOut}>Sign Out</button>
            ) : (
              <Link to="/login">
                <button>Sign In</button>
              </Link>
            )}
          </div>
        }
      />
      {/* <Route
        exact
        path="/"
        element={
          <AdminPage
            signOut={signOut}
            user={user}
            teams={teams}
            setTeams={setTeams}
          />
        }
      ></Route> */}
      <Route path={`/register`} element={<RegistrationSelector />} />
      <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
      {teams &&
        teams.length &&
        teams.map((team, index) => (
          <React.Fragment key={index}>
            <Route
              path={`/${team.id}`}
              element={
                <RegistrationForm
                  submitForm={submitForm}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  setForms={setForms}
                  setTeamsID={setTeamsID}
                />
              }
            />
            <Route
              path={`/${team.id}/guest`}
              element={
                <RegistrationForm
                  submitForm={submitForm}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  setForms={setForms}
                  setTeamsID={setTeamsID}
                />
              }
            />

            <Route
              path={`/${team.id}/guest/registered-players`}
              element={
                <RegisteredList
                  submitForm={submitForm}
                  forms={forms}
                  setForms={setForms}
                  deleteForm={deleteForm}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  getForms={getForms}
                />
              }
            />
            <Route
              path={`/${team.id}/registered-players`}
              element={
                <RegisteredList
                  submitForm={submitForm}
                  forms={forms}
                  setForms={setForms}
                  deleteForm={deleteForm}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  getForms={getForms}
                />
              }
            />
          </React.Fragment>
        ))}
    </Routes>
  );
};

export default AppRoutes;
