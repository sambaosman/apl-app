import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/AdminPage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTeam from "./components/MyTeam/MyTeam";

const AppRoutes = ({ userTeamArray, googleData, setUserTeamArray }) => {
  const [teams, setTeams] = useState([]);
  const [clickedTeam, setClickedTeam] = useState();
  const [teamID, setTeamID] = useState("");

  const history = useNavigate();

  return (
    <Routes>
      <Route
        path="/teams"
        element={
          <HomePage
            teams={teams}
            setTeams={setTeams}
            history={history}
            setClickedTeam={setClickedTeam}
          />
        }
      />
      <Route
        exact
        path="/"
        element={
          <MyTeam
            googleData={googleData}
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
