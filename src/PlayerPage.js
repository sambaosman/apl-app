import React, { useEffect } from "react";
import { TeamMember } from "./models";
import { DataStore } from "aws-amplify";
import { deleteTeamMember } from "./RegistrationServices";

const PlayerPage = ({ teamMembers, setTeamMembers, teamID }) => {
  useEffect(() => {
    const getTeamMembers = async () => {
      let models = await DataStore.query(TeamMember);
      setTeamMembers(models);
    };
    getTeamMembers();
  }, []);

  return (
    <React.Fragment>
      <div>Managers</div>
      {teamMembers
        .filter(
          (team) => team.teamsID === teamID && team.teamMemberType === "manager"
        )
        .map((teamMember) => (
          <div>
            {teamMember.firstName}
            {teamMember.teamsID}
            <div onClick={() => deleteTeamMember(teamMember, setTeamMembers)}>
              click here
            </div>
          </div>
        ))}
      <div>Players</div>

      {teamMembers
        .filter(
          (team) => team.teamsID === teamID && team.teamMemberType === "player"
        )
        .map((teamMember) => (
          <div>
            {teamMember.firstName}
            {teamMember.teamsID}
            <div onClick={() => deleteTeamMember(teamMember, setTeamMembers)}>
              click here
            </div>
          </div>
        ))}
      <div>Guests</div>
      {teamMembers
        .filter(
          (team) =>
            team.teamsID === teamID && team.teamMemberType === "guestPlayer"
        )
        .map((teamMember) => (
          <div>
            {teamMember.firstName}
            {teamMember.teamsID}
            <div onClick={() => deleteTeamMember(teamMember, setTeamMembers)}>
              click here
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default PlayerPage;
