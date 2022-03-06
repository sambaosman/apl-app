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
              <React.Fragment>
                <Row>
                  <Col>Name</Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    {manager.firstName} {manager.lastName}
                  </Col>
                </Row>
              </React.Fragment>
            ))
          ) : (
            <div>None</div>
          )}
          <div className="player-header">Players</div>
          <hr />

          {players && players.length ? (
            players.map((player) => (
              <React.Fragment>
                <Row>
                  <Col>Name</Col>
                  <Col>Jersey Number</Col>
                </Row>
                <hr />

                <Row>
                  <Col>
                    {player.firstName} {player.lastName}
                  </Col>
                  <Col>{player.jerseyNumber}</Col>
                </Row>
              </React.Fragment>
            ))
          ) : (
            <div>None</div>
          )}
          <div className="player-header">Guest Players</div>
          <hr />
          {guestPlayers && guestPlayers.length ? (
            guestPlayers.map((guest) => (
              <React.Fragment>
                <Row>
                  <Col>Name</Col>
                  <Col>Jersey Number</Col>
                  <hr />
                </Row>
                <Row>
                  <Col>
                    {" "}
                    {guest.firstName} {guest.lastName}
                  </Col>
                  <Col>{guest.jerseyNumber}</Col>
                </Row>
              </React.Fragment>
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
