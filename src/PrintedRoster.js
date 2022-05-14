import React from "react";
import { Table } from "reactstrap";
import logo from "./images/apllogo.png";

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
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            {managers && managers.length ? (
              managers.map((manager, index) => (
                <tbody key={index}>
                  <tr>
                    <td>
                      {manager.firstName} {manager.lastName}
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td>None</td>
                  <td></td>
                </tr>
              </tbody>
            )}
          </Table>
          <div className="player-header">Players</div>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Jersey Number</th>
              </tr>
            </thead>
            {players && players.length ? (
              players.map((player, index) => (
                <tbody key={index}>
                  <tr>
                    <td>
                      {player.firstName} {player.lastName}{" "}
                    </td>
                    <td>{player.jerseyNumber}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td>None</td>
                  <td></td>
                </tr>
              </tbody>
            )}
          </Table>
          <div className="player-header">Guest Players</div>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Jersey Number</th>
              </tr>
            </thead>
            {guestPlayers && guestPlayers.length ? (
              guestPlayers.map((guestPlayer, index) => (
                <tbody key={index}>
                  <tr>
                    <td>
                      {guestPlayer.firstName} {guestPlayer.lastName}{" "}
                    </td>
                    <td>{guestPlayer.jerseyNumber}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td>None</td>
                  <td></td>
                </tr>
              </tbody>
            )}
          </Table>
        </div>
      </div>
    );
  }
}

export default PrintedRoster;
