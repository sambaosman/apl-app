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
import moment from "moment";
import AppHeader from "./AppHeader";

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
    dob: moment().locale("en").format("YYYY-MM-DD"),
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
    const getUserFromURL = () => {
      let link = window.location.pathname;
      let linkArray = link.split("/");
      let user = linkArray.length == 3 ? linkArray[2] : linkArray[3];
      return user;
    };
    let user = getUserFromURL();
    setUserType(user);
  }, []);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log("user", user);
      setUserType(user.attributes["custom:userType"]);
      setTeamID(user.attributes["custom:teamID"]);
    });
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
    const getUserFromURL = () => {
      let link = window.location.pathname;
      let linkArray = link.split("/");
      let user = linkArray.length == 3 ? linkArray[2] : linkArray[3];
      return user;
    };
    let user = getUserFromURL();
    setUserType(user);
    setError(null);
  }, [loggedIn]);

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
          <React.Fragment>
            <AppHeader setLoggedIn={setLoggedIn} />
            <div className="app-container">
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
            </div>
          </React.Fragment>
        }
      />
      <Route
        path="/register/player"
        element={
          <RegistrationInputGroup
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
            teamMembers={teamMembers}
            userType={userType}
          />
        }
      />
      <Route
        path="/register/guestPlayer"
        element={
          <RegistrationInputGroup
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
            teammembers={teamMembers}
            userType={userType}
          />
        }
      />

      <Route
        path="/register/manager"
        element={
          <RegistrationInputGroup
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
            teamMembers={teamMembers}
            userType={userType}
          />
        }
      />

      <Route
        path="/register/admin"
        element={
          <RegistrationInputGroup
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
            teamMembers={teamMembers}
            userType={userType}
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
                    customField={
                      type === "player" || type === "guestPlayer"
                        ? {
                            name: "jerseyNumber",
                            placeholder: "Jersey Number",
                          }
                        : false
                    }
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
                    teamMembers={teamMembers}
                    userType={userType}
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
                <div
                  className="app-container"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <PrimaryButton> Log In</PrimaryButton>
                </div>
              </Link>
            )}
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
