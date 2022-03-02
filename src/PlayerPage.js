import React, { useEffect } from "react";
import { TeamMember } from "./models";
import { DataStore } from "aws-amplify";
import { deleteTeamMember } from "./RegistrationServices";
import { signOut } from "./LoginRegistration/LoginRegistrationFunctions";
import { Row, Col } from "reactstrap";

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

  const managers = teamMembers.filter(
    (team) => team.teamsID === teamID && team.teamMemberType === "manager"
  );

  const players = teamMembers.filter(
    (team) =>
      team.teamsID === "1234" &&
      // teamID
      team.teamMemberType === "player"
  );

  const guestPlayers = teamMembers.filter(
    (team) =>
      team.teamsID === "1234" &&
      // teamID
      team.teamMemberType === "guestPlayer"
  );

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: " space-between",
          alignItems: "center",
        }}
      >
        <div className="app-title">Team Roster</div>
        <div className="logout-button" onClick={() => signOut(setLoggedIn)}>
          {" "}
          Log out
        </div>
      </div>

      <div className="roster-user-section">
        <div className="roster-user-label">Managers</div>
      </div>
      {managers && managers.length ? (
        managers.map((teamMember, index) => (
          <RosterIndividual
            key={index}
            teamMember={teamMember}
            setTeamMembers={setTeamMembers}
            deleteTeamMember={deleteTeamMember}
            userType={userType}
          />
        ))
      ) : (
        <div>No managers to show</div>
      )}
      <div className="roster-user-section">
        <div className="roster-user-label">Players</div>
      </div>

      {players && players.length ? (
        players.map((teamMember, index) => (
          <RosterIndividual
            key={index}
            teamMember={teamMember}
            setTeamMembers={setTeamMembers}
            deleteTeamMember={deleteTeamMember}
            userType={userType}
          />
        ))
      ) : (
        <div>No players to show</div>
      )}
      <div className="roster-user-section">
        <div className="roster-user-label"> Guests</div>
      </div>
      {guestPlayers && guestPlayers.length ? (
        guestPlayers.map((teamMember, index) => (
          <RosterIndividual
            key={index}
            teamMember={teamMember}
            setTeamMembers={setTeamMembers}
            deleteTeamMember={deleteTeamMember}
            userType={userType}
          />
        ))
      ) : (
        <div>No Guests to show</div>
      )}
    </div>
  );
};

export default PlayerPage;

const RosterIndividual = ({
  teamMember,
  setTeamMembers,
  deleteTeamMember,
  userType,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Row
        style={{
          margin: "20px",
          display: "flex",
          alignItems: "center",
          width: "400px",
        }}
      >
        <Col>
          <div className="user-icon-circle">
            {teamMember.teamMemberType === "manager" ? (
              <i
                className={`fa-solid fa-user-tie`}
                style={{ fontSize: "26px" }}
              />
            ) : (
              <div style={{ fontWeight: "bold" }}>
                {teamMember.jerseyNumber}
              </div>
            )}
          </div>
        </Col>
        <Col style={{ textAlign: "left", fontWeight: "bold" }}>
          {teamMember.firstName} {teamMember.lastName}
        </Col>
        {userType === "manager" && (
          <Col>
            <div
              className="delete-player-icon"
              onClick={() => deleteTeamMember(teamMember, setTeamMembers)}
            >
              <i
                className={`fa-solid fa-times`}
                style={{ fontSize: "15px", color: "#a24936" }}
              />
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};
