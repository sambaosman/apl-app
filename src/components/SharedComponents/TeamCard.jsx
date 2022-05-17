import React from "react";
import WebTeamCard from "./WebTeamCard";
import MobileTeamCard from "./MobileTeamCard";
import "./TeamCard.scss";
import { Row } from "reactstrap";

const TeamCard = ({
  teams,
  showButtons,
  //   team,
  //   setTeams,
  //   setShowEditTeam,
  //   updateTeam,
  //   setClickedTeam,
  //   history,
}) => {
  return (
    <Row>
      {teams.map((team) => (
        <React.Fragment>
          <WebTeamCard
            team={team}
            showButtons={showButtons}
            // setClickedTeam={setClickedTeam}
            // updateTeam={updateTeam}
            // setTeams={setTeams}
            // team={team}
            // history={history}
            // setShowEditTeam={setShowEditTeam}
          />
          <MobileTeamCard
            team={team}
            showButtons={showButtons}

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
    </Row>
  );
};

export default TeamCard;
