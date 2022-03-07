import React, { useState, useRef, useEffect } from "react";
import RosterIndividual from "./RosterIndividual";
import { signOut } from "../LoginRegistration/LoginRegistrationFunctions";
import LinkModal from "./LinkModal";
import ReactToPrint from "react-to-print";
import PrintedRoster from "../PrintedRoster";
import { PrimaryButton } from "../StyledComponents/StyledComponents";
import { Row, Col } from "reactstrap";
import { getTeamMembers } from "../RegistrationServices";

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

  const componentRef = useRef();

  const toggleLinkModal = () => {
    setIsLinkModalOpen(!isLinkModalOpen);
  };

  useEffect(() => {
    getTeamMembers(setTeamMembers);
  }, []);

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
          alignItems: "flex-start",
        }}
      >
        <div>
          <div className="app-title">{team && team.teamName}</div>
          <Row>
            <ReactToPrint
              trigger={() => (
                <Col style={{ display: "flex", alignItems: "flex-end" }}>
                  <span className="print-button">
                    <i
                      className={`fa-solid fa-print`}
                      style={{ fontSize: "15px", color: "white" }}
                    />
                  </span>
                </Col>
              )}
              content={() => componentRef.current}
            />
            {(userType === "admin" || userType === "manager") && (
              <Col style={{ display: "flex", alignItems: "flex-end" }}>
                <PrimaryButton
                  onClick={(event) => {
                    toggleLinkModal();
                  }}
                  style={{ width: "250px" }}
                >
                  <i
                    className={`fa-solid fa-link`}
                    style={{ fontSize: "15px", color: "white" }}
                  />
                  <span style={{ paddingLeft: "10px" }}>Shareable Links</span>
                </PrimaryButton>
                <LinkModal
                  team={team}
                  isLinkModalOpen={isLinkModalOpen}
                  toggleLinkModal={toggleLinkModal}
                />
              </Col>
            )}
          </Row>
          <PrintedRoster
            ref={componentRef}
            managers={managers}
            players={players}
            guestPlayers={guestPlayers}
            team={team}
          />
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
