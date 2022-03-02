import React from "react";
import AdminPage from "./AdminPage";
import PlayerPage from "./PlayerPage";

const HomePage = ({
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
      {userType !== "admin" ? (
        <AdminPage
          teams={teams}
          setTeams={setTeams}
          setLoggedIn={setLoggedIn}
          history={history}
          setClickedTeam={setClickedTeam}
        />
      ) : (
        <PlayerPage
          teamMembers={teamMembers}
          setTeamMembers={setTeamMembers}
          userType={userType}
          teamID={teamID}
          setLoggedIn={setLoggedIn}
          userType={userType}
        />
      )}
    </React.Fragment>
  );
};

export default HomePage;
