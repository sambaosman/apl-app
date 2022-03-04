import React from "react";
import AdminPage from "./AdminPage";
import PlayerPage from "./PlayerPage";
import RosterPage from "./SharedComponents/RosterPage";

const HomePage = ({
  team,
  teams,
  setTeams,
  setLoggedIn,
  history,
  userType,
  teamID,
  teamMembers,
  setTeamMembers,
  setClickedTeam,
}) => {
  return (
    <React.Fragment>
      {userType === "admin" ? (
        <AdminPage
          teams={teams}
          setTeams={setTeams}
          setLoggedIn={setLoggedIn}
          history={history}
          setClickedTeam={setClickedTeam}
        />
      ) : (
        <RosterPage
          team={team}
          teamMembers={teamMembers}
          setTeamMembers={setTeamMembers}
          userType={userType}
          setLoggedIn={setLoggedIn}
          history={history}
          usersTeam={teamID}
          teams={teams}
        />
      )}
    </React.Fragment>
  );
};

export default HomePage;
