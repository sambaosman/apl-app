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
  const [openedLinkID, setOpenedLinkID] = useState("");
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
    { name: "manager", array: managers },
    { name: "player", array: players },
    { name: "guest player", array: guestPlayers },
  ];

  const showLinkHandler = (event, id) => {
    event.stopPropagation();
    setOpenedLinkID(id);
  };

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
        </div>

        <div className="logout-button" onClick={() => signOut(setLoggedIn)}>
          {" "}
          Log out
        </div>
      </div>
      {array.map((type) => (
        <React.Fragment>
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
            <div>{`No ${type.name}s to show`}</div>
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
