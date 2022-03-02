import React from "react";

const Roster = ({ teamMembers, clickedTeam }) => {
  return (
    <div>
      <h1>{clickedTeam && clickedTeam.teamName}</h1>
      {teamMembers &&
        teamMembers.length &&
        teamMembers
          .filter((member) => member.teamsID === clickedTeam.id)
          .map((member) => (
            <div>
              <div>{member.teamsID}</div>
              <div>{member.firstName}</div>
              <div>{member.lastName}</div>
            </div>
          ))}
    </div>
  );
};

export default Roster;
