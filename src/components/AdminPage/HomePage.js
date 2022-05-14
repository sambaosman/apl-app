import React from "react";
import AdminPage from "./AdminPage";
import { Row, Col } from "reactstrap";

const HomePage = ({ teams, setTeams, history, setClickedTeam }) => {
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
