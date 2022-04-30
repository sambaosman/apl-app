import React, { useState, useEffect } from "react";
import { getTeamMembers } from "./RegistrationServices";
// import { getTeams } from "./TeamServices";
import LoginPage from "./LoginRegistration/Login/LoginPage";
import Register from "./LoginRegistration/Registration/Register";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationInputGroup from "./LoginRegistration/Registration/RegistrationInputGroup";
import OTP from "./LoginRegistration/Registration/OTP";
import Waiver from "./LoginRegistration/Waiver";
import RosterPage from "./SharedComponents/RosterPage";
import { PrimaryButton } from "./StyledComponents/StyledComponents";
import moment from "moment";
import NavBar from "./components/NavBar/NavBar";
import { getTeams } from "./server/ApiFunctions";

const AppRoutes = ({
  userTeamArray,
  setLoggedIn,
  googleData,
  handleLogin,
  handleFailure,
}) => {
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
      let user = linkArray[2];
      return user;
    };
    const getIDFromURL = () => {
      let link = window.location.pathname;
      let linkArray = link.split("/");
      return linkArray.length == 4 ? linkArray[3] : "";
    };
    let id = getIDFromURL();
    let user = getUserFromURL();
    setUserType(user);
  }, []);

  useEffect(() => {
    let link;
    const getIDFromURL = () => {
      let link = window.location.pathname;
      let linkArray = link.split("/");
      return linkArray.length == 4 ? linkArray[3] : "";
    };
    let id = getIDFromURL();
    setFormFields({
      ...formFields,
      teamID: id,
    });
    getTeamMembers(setTeamMembers);
    const getUserFromURL = () => {
      let link = window.location.pathname;
      let linkArray = link.split("/");
      let user = linkArray[2];
      return user;
    };
    let user = getUserFromURL();
    setUserType(user);
    setError(null);
    getTeams(setTeams);
  }, []);

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
        element={<LoginPage error={error} setError={setError} />}
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
            setTeamMembers={setTeamMembers}
            history={history}
            setError={setError}
          />
        }
      />
      <Route
        path="/roster"
        element={
          <React.Fragment>
            <NavBar setLoggedIn-={setLoggedIn} />
            <div className="app-container">
              <RosterPage
                team={clickedTeam}
                teamMembers={teamMembers}
                setTeamMembers={setTeamMembers}
                userType={userType}
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
                      name: `teamID`,
                      placeholder:
                        type === "admin"
                          ? "Admin ID"
                          : type === "player" || type === "guestPlayer"
                          ? "Team ID"
                          : type === "manager"
                          ? "Manager ID"
                          : "ID",
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
          <HomePage
            team={clickedTeam}
            teams={teams}
            setTeams={setTeams}
            history={history}
            userType={userType}
            teamID={teamID}
            teamMembers={teamMembers}
            setTeamMembers={setTeamMembers}
            setClickedTeam={setClickedTeam}
            setUserType={setUserType}
            setLoggedIn={setLoggedIn}
            userTeamArray={userTeamArray}
            googleData={googleData}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
