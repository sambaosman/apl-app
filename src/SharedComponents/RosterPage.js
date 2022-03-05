import React, { useState, useEffect } from "react";
import RosterIndividual from "./RosterIndividual";
import { signOut } from "../LoginRegistration/LoginRegistrationFunctions";
import LinkModal from "./LinkModal";

const RosterPage = ({
  team,
  teamMembers,
  setTeamMembers,
  userType,
  setLoggedIn,
  history,
  usersTeam,
  teams,
}) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

  const toggleLinkModal = () => {
    setIsLinkModalOpen(!isLinkModalOpen);
  };

  if (!team) {
    team = teams.find((team) => team.id === usersTeam);
  }
  let teamID = team && team.id;
  const managers =
    teamMembers &&
    teamMembers.filter(
      (teamMember) =>
        teamMember.teamsID === teamID && teamMember.teamMemberType === "manager"
    );

  const players =
    teamMembers &&
    teamMembers.filter(
      (teamMember) =>
        teamMember.teamsID === teamID && teamMember.teamMemberType === "player"
    );

  const guestPlayers =
    teamMembers &&
    teamMembers.filter(
      (teamMember) =>
        teamMember.teamsID === teamID &&
        teamMember.teamMemberType === "guestPlayer"
    );

  const array = [
    { name: "managers", array: managers },
    { name: "players", array: players },
    { name: "guest players", array: guestPlayers },
  ];

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: " space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div className="app-title">{team && team.teamName}</div>
          {(userType === "admin" || userType === "manager") && (
            <div>
              <span
                className="icon-button"
                onClick={(event) => {
                  toggleLinkModal();
                }}
              >
                <i className="fa-solid fa-link" />
              </span>
              <LinkModal
                team={team}
                isLinkModalOpen={isLinkModalOpen}
                toggleLinkModal={toggleLinkModal}
              />
            </div>
          )}
        </div>

        <div
          className="logout-button"
          onClick={() => signOut(setLoggedIn, history)}
        >
          Log Out
        </div>
      </div>
      {array.map((type, index) => (
        <React.Fragment key={index}>
          <div className="roster-user-section">
            <div className="roster-user-label">{type.name}</div>
          </div>
          {type.array && type.array.length ? (
            type.array.map((player) => (
              <RosterIndividual
                player={player}
                setTeamMembers={setTeamMembers}
                userType={userType}
              />
            ))
          ) : (
            <div>{`No ${type.name} to show`}</div>
          )}
        </React.Fragment>
      ))}
      {userType === "admin" ? (
        <span className="back-button-container" onClick={() => history(-1)}>
          <span className="back-button-text">
            <span style={{ paddingRight: "10px" }}>
              <i className="fa-solid fa-arrow-left" />
            </span>
            Go Back
          </span>
        </span>
      ) : null}
    </div>
  );
};

export default RosterPage;
