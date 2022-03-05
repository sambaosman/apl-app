import React, { useState, useRef } from "react";
import {
  Form as ReactForm,
  FormGroup,
  Label,
  Input,
  Modal,
  Row,
  Col,
} from "reactstrap";

class PrintedRoster extends React.Component {
  render() {
    const { managers, players, guestPlayers, team } = this.props;
    return (
      <div className="printed-roster">
        <div style={{ margin: "40px" }}>
          <div className="app-title">{team && team.teamName}</div>
          <div className="player-header">Managers</div>
          {managers ? (
            managers.map((manager) => (
              <Row>
                <Col>
                  {manager.firstName} {manager.lastName}
                </Col>
              </Row>
            ))
          ) : (
            <div>None</div>
          )}
          <div className="player-header">Players</div>
          {players ? (
            players.map((player) => (
              <Row>
                <Col>{player.jerseyNumber}</Col>

                <Col>
                  {player.firstName} {player.lastName}
                </Col>
              </Row>
            ))
          ) : (
            <div>None</div>
          )}
          <div className="player-header">Guest Players</div>
          {guestPlayers ? (
            guestPlayers.map((guest) => (
              <Row>
                <Col>{guest.jerseyNumber}</Col>
                <Col>
                  {guest.firstName} {guest.lastName}
                </Col>
              </Row>
            ))
          ) : (
            <div>None</div>
          )}
        </div>
      </div>
    );
  }
}

export default PrintedRoster;
