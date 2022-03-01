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
      test
      {teamMembers
        .filter((team) => team.teamsID === teamID)
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
