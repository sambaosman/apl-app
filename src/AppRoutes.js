import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import RegisteredList from "./RegisteredList";
import { Amplify } from "aws-amplify";
import {
  submitTeamMember,
  getTeamMembers,
  deleteTeamMember,
} from "./RegistrationServices";
import { getTeams } from "./TeamServices";
import awsExports from "./aws-exports";
import LoginPage from "./LoginRegistration/Login/LoginPage";
import Register from "./LoginRegistration/Registration/Register";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(awsExports);

const AppRoutes = ({ loggedIn, setLoggedIn }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [teamsID, setTeamsID] = useState();

  useEffect(() => {
    getTeamMembers(setTeamMembers);
    getTeams(setTeams);
  }, []);

  const onLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Routes>
      <Route
        exact
        path={`/register/*`}
        element={<Register teams={teams} setTeamMembers={setTeamMembers} />}
      />
      <Route
        path={`/register/account?type=player`}
        element={<div>test 1</div>}
      />
      <Route
        path={`/register/account?type=guestPlayer`}
        element={<div>test 2</div>}
      />
      <Route
        path={`/register/account?type=manager`}
        element={<div>test 3</div>}
      />
      <Route
        path={`/register/account?type=admin`}
        element={<div>test 4</div>}
      />
      <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
      {teams &&
        teams.length &&
        teams.map((team, index) => (
          <React.Fragment key={index}>
            <Route
              path={`/${team.id}`}
              element={
                <RegistrationForm
                  submitTeamMember={submitTeamMember}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  setTeamMembers={setTeamMembers}
                  setTeamsID={setTeamsID}
                />
              }
            />
            <Route
              path={`/${team.id}/guest`}
              element={
                <RegistrationForm
                  submitTeamMember={submitTeamMember}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  setTeamMembers={setTeamMembers}
                  setTeamsID={setTeamsID}
                />
              }
            />

            <Route
              path={`/${team.id}/guest/registered-players`}
              element={
                <RegisteredList
                  submitTeamMember={submitTeamMember}
                  teamMembers={teamMembers}
                  setTeamMembers={setTeamMembers}
                  deleteTeamMember={deleteTeamMember}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  getTeamMembers={getTeamMembers}
                />
              }
            />
            <Route
              path={`/${team.id}/registered-players`}
              element={
                <RegisteredList
                  submitTeamMember={submitTeamMember}
                  teamMembers={teamMembers}
                  setTeamMembers={setTeamMembers}
                  deleteTeamMember={deleteTeamMember}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  getTeamMembers={getTeamMembers}
                />
              }
            />
          </React.Fragment>
        ))}
      <Route
        exact
        path="/"
        element={
          <div>
            {loggedIn ? (
              <HomePage
                teams={teams}
                setTeams={setTeams}
                setLoggedIn={setLoggedIn}
              />
            ) : (
              <Link to="/login">
                <button>Sign In</button>
              </Link>
            )}
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
