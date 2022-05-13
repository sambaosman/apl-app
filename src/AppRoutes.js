import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/AdminPage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTeam from "./components/MyTeam/MyTeam";

const AppRoutes = ({
  userTeamArray,
  setLoggedIn,
  googleData,
  setUserTeamArray,
}) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [clickedTeam, setClickedTeam] = useState();
  const [error, setError] = useState();
  const [userType, setUserType] = useState("");
  const [teamID, setTeamID] = useState("");

  const history = useNavigate();

  return (
    <Routes>
      <Route
        path="/teams"
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
            setUserTeamArray={setUserTeamArray}
          />
        }
      />
      <Route
        exact
        path="/"
        element={
          <MyTeam
            googleData={googleData}
            setLoggedIn={setLoggedIn}
            userTeamArray={userTeamArray}
            setUserTeamArray={setUserTeamArray}
            teamID={teamID}
            setTeamID={setTeamID}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
