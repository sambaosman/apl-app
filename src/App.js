import "./App.css";
import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisteredList from "./RegisteredList";
import AdminPage from "./AdminPage";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { submitForm, getForms, deleteForm } from "./RegistrationServices";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTeams } from "./TeamServices";
import LoginPage from "./LoginPage";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  const [forms, setForms] = useState([]);
  const [teams, setTeams] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [teamsID, setTeamsID] = useState();

  useEffect(() => {
    getForms(setForms);
    getTeams(setTeams);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LoginPage />
              // <AdminPage
              //   signOut={signOut}
              //   user={user}
              //   teams={teams}
              //   setTeams={setTeams}
              // />
            }
          ></Route>
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
                ></Route>
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
                ></Route>

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
                ></Route>
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
                ></Route>
              </React.Fragment>
            ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);
