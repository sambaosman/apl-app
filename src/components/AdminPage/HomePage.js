import React from "react";
import AdminPage from "./AdminPage";
import { Row, Col } from "reactstrap";

const HomePage = ({
  team,
  teams,
  setTeams,
  history,
  userType,
  teamID,
  teamMembers,
  setTeamMembers,
  setClickedTeam,
  userTeamArray,
  googleData,
  setUserTeamArray,
}) => {
  return (
    <AdminPage
      teams={teams}
      setTeams={setTeams}
      history={history}
      setClickedTeam={setClickedTeam}
    />
  );
};

export default HomePage;
