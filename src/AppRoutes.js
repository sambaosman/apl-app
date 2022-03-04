import React, { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import { getTeamMembers } from "./RegistrationServices";
import { getTeams } from "./TeamServices";
import awsExports from "./aws-exports";
import LoginPage from "./LoginRegistration/Login/LoginPage";
import Register from "./LoginRegistration/Registration/Register";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationInputGroup from "./LoginRegistration/Registration/RegistrationInputGroup";
import OTP from "./LoginRegistration/Registration/OTP";
import Waiver from "./LoginRegistration/Waiver";
import Roster from "./Roster";
import RosterPage from "./SharedComponents/RosterPage";
import { Auth } from "aws-amplify";
import { PrimaryButton } from "./StyledComponents/StyledComponents";

Amplify.configure(awsExports);

const AppRoutes = ({ loggedIn, setLoggedIn }) => {
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
  };
  const [teamMembers, setTeamMembers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [clickedTeam, setClickedTeam] = useState();
  const [formFields, setFormFields] = useState(initialFormFields);
  const [error, setError] = useState();
  const [userType, setUserType] = useState("");
  const [teamID, setTeamID] = useState("");

  const history = useNavigate();

  const handleOnChange = (e) => {
    e.persist();
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
      teamMemberType: window.location.pathname.split("/")[2], //getting user type from url
    });
  };

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log("user", user);
      setUserType(user.attributes["custom:userType"]);
      setTeamID(user.attributes["custom:teamID"]);
    });
  }, [loggedIn]);

  useEffect(() => {
    let link;
    const getIDFromURL = () => {
      link = window.location.pathname;
      let linkArray = link.split("/").pop();
      return parseInt(linkArray) ? linkArray : "";
    };
    let id = getIDFromURL();
    setFormFields({
      ...formFields,
      teamID: id,
    });
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
      <Route
        path="/login"
        element={
          <LoginPage onLogin={onLogin} error={error} setError={setError} />
        }
      />
      <Route
        path="/register/authCode"
        element={
          <OTP
            formFields={formFields}
            setFormFields={setFormFields}
            history={history}
            setError={setError}
            error={error}
          />
        }
      />
      <Route
        path="/register/waiver"
        element={
          <Waiver
            formFields={formFields}
            setFormFields={setFormFields}
            history={history}
            setError={setError}
          />
        }
      />
      <Route
        path="/roster"
        element={
          <RosterPage
            team={clickedTeam}
            teamMembers={teamMembers}
            setTeamMembers={setTeamMembers}
            userType={userType}
            setLoggedIn={setLoggedIn}
            history={history}
            usersTeam={teamID}
            teams={teams}
          />
        }
      />
      <Route
        path="/register/player"
        element={
          <RegistrationInputGroup
            // goBack={() => setTeamMemberType()}
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
            registerFunction={() => history("/register/waiver")}
            history={history}
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
            // goBack={() => setTeamMemberType()}
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
            registerFunction={() => history("/register/waiver")}
            history={history}
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
            // goBack={() => setTeamMemberType()}
            customID={{
              name: "teamID",
              placeholder: "Manager ID",
            }}
            handleOnChange={handleOnChange}
            setFormFields={setFormFields}
            registerFunction={() => history("/register/waiver")}
            history={history}
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
            // goBack={() => setTeamMemberType()}
            customID={{
              name: "teamID",
              placeholder: "Admin ID",
            }}
            handleOnChange={handleOnChange}
            setFormFields={setFormFields}
            registerFunction={() => history("/register/waiver")}
            history={history}
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
                key={index}
                path={`/register/${type}/${team.id}`}
                element={
                  <RegistrationInputGroup
                    // goBack={() => setTeamMemberType()}
                    customID={{
                      name: `${type}ID`,
                      placeholder: `${type} ID`,
                    }}
                    handleOnChange={handleOnChange}
                    setFormFields={setFormFields}
                    registerFunction={() => history("/register/waiver")}
                    history={history}
                    formFields={formFields}
                    setError={setError}
                    error={error}
                    teams={teams}
                    setTeamMembers={setTeamMembers}
                  />
                }
              />
            ))}
          </React.Fragment>
        ))}
      <Route
        path="/"
        element={
          <div>
            {loggedIn ? (
              <HomePage
                team={clickedTeam}
                teams={teams}
                setTeams={setTeams}
                setLoggedIn={setLoggedIn}
                history={history}
                userType={userType}
                teamID={teamID}
                teamMembers={teamMembers}
                setTeamMembers={setTeamMembers}
                setClickedTeam={setClickedTeam}
                setUserType={setUserType}
              />
            ) : (
              <Link to="/login">
                <PrimaryButton>Log In</PrimaryButton>
              </Link>
            )}
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
