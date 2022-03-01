import React, { useEffect, useState } from "react";
import AdminPage from "./AdminPage";
import PlayerPage from "./PlayerPage";
import { Auth } from "aws-amplify";
import { TeamMember } from "./models";
import { DataStore } from "aws-amplify";

const HomePage = ({
  teams,
  setTeams,
  setLoggedIn,
  history,
  userType,
  teamID,
  teamMembers,
  setTeamMembers,
}) => {
  return (
    <React.Fragment>
      {userType !== "admin" ? (
        <AdminPage
          teams={teams}
          setTeams={setTeams}
          setLoggedIn={setLoggedIn}
          history={history}
        />
      ) : (
        <PlayerPage
          teamMembers={teamMembers}
          setTeamMembers={setTeamMembers}
          userType={userType}
          teamID={teamID}
          setLoggedIn={setLoggedIn}
        />
      )}
    </React.Fragment>
  );
};

export default HomePage;
