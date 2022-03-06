import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { deleteTeamMember } from "../RegistrationServices";

const RosterIndividual = ({ player, setTeamMembers, userType }) => {
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
            {player.teamMemberType === "manager" ? (
              <i
                className={`fa-solid fa-user-tie`}
                style={{ fontSize: "26px" }}
              />
            ) : (
              <div style={{ fontWeight: "bold" }}>{player.jerseyNumber}</div>
            )}
          </div>
        </Col>
        <Col
          style={{ textAlign: "left", fontWeight: "bold", minWidth: "150px" }}
        >
          {player.firstName} {player.lastName}
        </Col>
        {(userType === "manager" || userType === "admin") && (
          <Col>
            <div
              className="delete-player-icon"
              onClick={() => deleteTeamMember(player, setTeamMembers)}
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
export default RosterIndividual;
