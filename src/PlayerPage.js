import React, { useEffect } from "react";
import { TeamMember } from "./models";
import { DataStore } from "aws-amplify";
import { deleteTeamMember } from "./RegistrationServices";
import { signOut } from "./LoginRegistration/LoginRegistrationFunctions";

const PlayerPage = ({
  teamMembers,
  setTeamMembers,
  teamID,
  setLoggedIn,
  userType,
}) => {
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
            {teamMember.teamMemberType}

            {userType === "manager" && (
              <div onClick={() => deleteTeamMember(teamMember, setTeamMembers)}>
                delete
              </div>
            )}
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
            {userType === "manager" && (
              <div onClick={() => deleteTeamMember(teamMember, setTeamMembers)}>
                delete
              </div>
            )}
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
            {userType === "manager" && (
              <div onClick={() => deleteTeamMember(teamMember, setTeamMembers)}>
                delete
              </div>
            )}
          </div>
        ))}
      <button onClick={() => signOut(setLoggedIn)}> Sign out</button>
    </React.Fragment>
  );
};

export default PlayerPage;
