import React, { useEffect, useState } from "react";
import { TeamMember } from "./models";
import { DataStore } from "aws-amplify";
const Roster = ({ teamMembers, teamID }) => {
  return (
    <div>
      {teamMembers &&
        teamMembers.length &&
        teamMembers
          .filter((member) => member.id === teamID)
          .map((member) => (
            <div>
              <div>{member.id}</div>
              <div>{member.firstName}</div>
              <div>{member.lastName}</div>
            </div>
          ))}
    </div>
  );
};

export default Roster;
