import React, { useEffect, useState } from "react";
import AdminPage from "./AdminPage";
import PlayerPage from "./PlayerPage";
import { Auth } from "aws-amplify";
import { TeamMember } from "./models";
import { DataStore } from "aws-amplify";

const HomePage = ({ teams, setTeams, setLoggedIn }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [userType, setUserType] = useState("");
  const [teamID, setTeamID] = useState("");

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      setUserType(user.attributes["custom:userType"]);
      setTeamID(user.attributes["custom:teamID"]);
    });
  }, []);

  return (
    <React.Fragment>
      {userType === "admin" ? (
        <AdminPage
          teams={teams}
          setTeams={setTeams}
          setLoggedIn={setLoggedIn}
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
