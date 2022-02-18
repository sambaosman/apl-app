import React, { useEffect, useState } from "react";
import AdminPage from "./AdminPage";
import PlayerPage from "./PlayerPage";
import ManagerPage from "./ManagerPage";
import { Auth } from "aws-amplify";
import { TeamMember } from "./models";
import { DataStore } from "aws-amplify";

const HomePage = ({ teams, setTeams, setLoggedIn }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user);
    });
    const getTeamMembers = async () => {
      let models = await DataStore.query(TeamMember);
      setTeamMembers(models);
    };
    getTeamMembers();
  }, []);

  return (
    <React.Fragment>
      {teamMembers.map((teamMember) => (
        <div>
          {teamMember.firstName}
          {teamMember.teamsID}
        </div>
      ))}
      <AdminPage teams={teams} setTeams={setTeams} setLoggedIn={setLoggedIn} />
    </React.Fragment>
  );
};

export default HomePage;
