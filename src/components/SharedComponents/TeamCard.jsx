import React from "react";
import WebTeamCard from "./WebTeamCard";
import MobileTeamCard from "./MobileTeamCard";
import "./TeamCard.scss";

const TeamCard = ({
  teams,
  //   team,
  //   setTeams,
  //   setShowEditTeam,
  //   updateTeam,
  //   setClickedTeam,
  //   history,
}) => {
  return (
    <React.Fragment>
      {teams.map((team) => (
        <React.Fragment>
          <WebTeamCard
            team={team}
            // setClickedTeam={setClickedTeam}
            // updateTeam={updateTeam}
            // setTeams={setTeams}
            // team={team}
            // history={history}
            // setShowEditTeam={setShowEditTeam}
          />
          <MobileTeamCard
            team={team}
            // setClickedTeam={setClickedTeam}
            // updateTeam={updateTeam}
            // setTeams={setTeams}
            // team={team}
            // history={history}
            // setShowEditTeam={setShowEditTeam}
          />
        </React.Fragment>
      ))}

      {/* shows when vw is less than 750px */}
    </React.Fragment>
  );
};

export default TeamCard;
