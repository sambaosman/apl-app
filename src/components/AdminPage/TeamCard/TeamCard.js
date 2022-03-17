import React from "react";
import WebTeamCard from "./WebTeamCard";
import MobileTeamCard from "./MobileTeamCard";
import "./TeamCard.scss";

const TeamCard = ({
  team,
  setTeams,
  setEditTeamModalOpen,
  updateTeam,
  setClickedTeam,
  history,
}) => {
  return (
    <React.Fragment>
      <WebTeamCard
        setClickedTeam={setClickedTeam}
        updateTeam={updateTeam}
        setTeams={setTeams}
        team={team}
        history={history}
      />
      <MobileTeamCard
        setClickedTeam={setClickedTeam}
        updateTeam={updateTeam}
        setTeams={setTeams}
        team={team}
        history={history}
      />
      {/* shows when vw is less than 750px */}
    </React.Fragment>
  );
};

export default TeamCard;
