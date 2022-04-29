import React from "react";
import AdminPage from "./components/AdminPage/AdminPage";
import RosterPage from "./SharedComponents/RosterPage";
import NavBar from "./components/NavBar/NavBar";
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
  setLoggedIn,
}) => {
  return (
    <Row>
      <NavBar setLoggedIn={setLoggedIn} />
      {/* <div className="app-container"> */}
      {/* {userType === "admin" ? ( */}
      <AdminPage
        teams={teams}
        setTeams={setTeams}
        history={history}
        setClickedTeam={setClickedTeam}
        setLoggedIn={setLoggedIn}
      />
      {/* ) : (
          <RosterPage
            team={team}
            teamMembers={teamMembers}
            setTeamMembers={setTeamMembers}
            userType={userType}
            history={history}
            usersTeam={teamID}
            teams={teams}
          />
        )} */}
      {/* </div> */}
    </Row>
  );
};

export default HomePage;
