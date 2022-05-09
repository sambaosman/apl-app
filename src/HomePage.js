import React from "react";
import AdminPage from "./components/AdminPage/AdminPage";
import RosterPage from "./SharedComponents/RosterPage";
import NavBar from "./components/NavBar/NavBar";
import { Row, Col } from "reactstrap";
import AddToTeam from "./LoginRegistration/AddToTeam";

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
  userTeamArray,
  googleData,
  setUserTeamArray,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
