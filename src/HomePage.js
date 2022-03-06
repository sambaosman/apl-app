import React from "react";
import AdminPage from "./AdminPage";
import RosterPage from "./SharedComponents/RosterPage";
import AppHeader from "./AppHeader";

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
      <AppHeader setLoggedIn={setLoggedIn} />
      <div className="app-container">
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
      </div>
    </React.Fragment>
  );
};

export default HomePage;
