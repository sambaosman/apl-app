import React from "react";
import { Row, Col } from "reactstrap";
import logo from "./Images/apllogo.png";

class PrintedRoster extends React.Component {
  render() {
    const { managers, players, guestPlayers, team } = this.props;
    return (
      <div className="printed-roster">
        <div style={{ margin: "40px" }}>
          <img src={logo} height="100" width="100" style={{ color: "red" }} />
          <div className="app-title">{team && team.teamName}</div>
          <div className="player-header">Managers</div>
          {managers && managers.length ? (
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
          {players && players.length ? (
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
          {guestPlayers && guestPlayers.length ? (
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
