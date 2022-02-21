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
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationInputGroup from "./LoginRegistration/Registration/RegistrationInputGroup";
import { register } from "./LoginRegistration/LoginRegistrationFunctions";
import AuthCodeInput from "./LoginRegistration/Registration/AuthCodeInput";

Amplify.configure(awsExports);

const AppRoutes = ({ loggedIn, setLoggedIn }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [teamsID, setTeamsID] = useState();

  const initialFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    jerseyNumber: "",
    teamID: "",
    password: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
    teamMemberType: "",
    formType: "register",
  };
  const [formFields, setFormFields] = useState(initialFormFields);
  const [error, setError] = useState();

  const history = useNavigate();
  const setTeamMemberType = (teamMemberType) => {
    setFormFields(() => ({ ...formFields, teamMemberType: teamMemberType }));
  };

  const handleOnChange = (e) => {
    e.persist();
    setFormFields(() => ({ ...formFields, [e.target.name]: e.target.value }));
  };

  const { formType } = formFields;

  useEffect(() => {
    getTeamMembers(setTeamMembers);
    getTeams(setTeams);
  }, []);

  const onLogin = () => {
    setLoggedIn(true);
  };

  const memberType = ["player", "guestPlayer", "manager", "admin"];
  return (
    <Routes>
      <Route
        exact
        path={`/register/*`}
        element={<Register formFields={formFields} />}
      />
      <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
      <Route
        path="/register/authCode"
        element={
          <AuthCodeInput
            formFields={formFields}
            setFormFields={setFormFields}
            history={history}
            setError={setError}
          />
        }
      />
      <Route
        path="/register/player"
        element={
          <RegistrationInputGroup
            goBack={() => setTeamMemberType()}
            customField={{
              name: "jerseyNumber",
              placeholder: "Jersey Number",
            }}
            customID={{
              name: "teamID",
              placeholder: "Team ID",
            }}
            handleOnChange={handleOnChange}
            setFormFields={setFormFields}
            registerFunction={register}
            formFields={formFields}
            setError={setError}
            error={error}
            teams={teams}
            setTeamMembers={setTeamMembers}
          />
        }
      />
      <Route
        path="/register/guestPlayer"
        element={
          <RegistrationInputGroup
            goBack={() => setTeamMemberType()}
            customField={{
              name: "jerseyNumber",
              placeholder: "Jersey Number",
            }}
            customID={{
              name: "teamID",
              placeholder: "Team ID",
            }}
            handleOnChange={handleOnChange}
            setFormFields={setFormFields}
            registerFunction={register}
            formFields={formFields}
            setError={setError}
            error={error}
            teams={teams}
            setTeamMembers={setTeamMembers}
          />
        }
      />

      <Route
        path="/register/manager"
        element={
          <RegistrationInputGroup
            goBack={() => setTeamMemberType()}
            customID={{
              name: "managerID",
              placeholder: "Manager ID",
            }}
            handleOnChange={handleOnChange}
            setFormFields={setFormFields}
            registerFunction={register}
            formFields={formFields}
            setError={setError}
            error={error}
            teams={teams}
            setTeamMembers={setTeamMembers}
          />
        }
      />

      <Route
        path="/register/admin"
        element={
          <RegistrationInputGroup
            goBack={() => setTeamMemberType()}
            customID={{
              name: "adminID",
              placeholder: "Admin ID",
            }}
            handleOnChange={handleOnChange}
            setFormFields={setFormFields}
            registerFunction={register}
            formFields={formFields}
            setError={setError}
            error={error}
            teams={teams}
            setTeamMembers={setTeamMembers}
          />
        }
      />

      {teams &&
        teams.length &&
        teams.map((team, index) => (
          <React.Fragment key={index}>
            {memberType.map((type, index) => (
              <Route
                path={`/register/account?type=${type}/id?=${team.id}`}
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
            ))}

            {/* <Route
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
            /> */}
          </React.Fragment>
        ))}
      <Route
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
