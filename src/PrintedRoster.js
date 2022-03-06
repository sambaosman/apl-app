import React from "react";
import { Table } from "reactstrap";
import logo from "./Images/apllogo.png";

class PrintedRoster extends React.Component {
  render() {
    const { managers, players, guestPlayers, team } = this.props;
    return (
      <div className="printed-roster">
        <div style={{ margin: "20px" }}>
          <img src={logo} height="50" width="50" />
          <span className="app-title" style={{ paddingLeft: "10px" }}>
            {team && team.teamName}
          </span>
          <div className="player-header">Managers</div>
          <Table>
            {managers && managers.length ? (
              managers.map((manager, index) => (
                <React.Fragment>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {manager.firstName} {manager.lastName}
                      </td>
                    </tr>
                  </tbody>
                </React.Fragment>
              ))
            ) : (
              <div>None</div>
            )}
          </Table>
          <div className="player-header">Players</div>
          <Table>
            {players && players.length ? (
              players.map((player, index) => (
                <React.Fragment key={index}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Jersey Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {player.firstName} {player.lastName}{" "}
                      </td>
                      <td>{player.jerseyNumber}</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              ))
            ) : (
              <div>None</div>
            )}
          </Table>
          <div className="player-header">Guest Players</div>
          <Table>
            {guestPlayers && guestPlayers.length ? (
              guestPlayers.map((guest, index) => (
                <React.Fragment key={index}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Jersey Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {guest.firstName} {guest.lastName}{" "}
                      </td>
                      <td>{guest.jerseyNumber}</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              ))
            ) : (
              <div>None</div>
            )}
          </Table>
        </div>
      </div>
    );
  }
}

export default PrintedRoster;
