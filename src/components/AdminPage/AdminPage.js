import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import AddTeamModal from "../../AddTeamModal";
import EditTeamModal from "../../EditTeamModal";
import { getTeams, deleteTeam } from "../../server/ApiFunctions";
import "./AdminPage.scss";

const AdminPage = ({ teams, setTeams, history, setClickedTeam }) => {
  const [teamName, setTeamName] = useState(null);
  const [division, setDivision] = useState(null);
  const [openedLinkID, setOpenedLinkID] = useState("");
  const [addTeamModalOpen, setAddTeamModalOpen] = useState(false);
  const [editTeamModalOpen, setEditTeamModalOpen] = useState(false);
  const [editedTeam, setEditedTeam] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [premierTeams, setPremierTeams] = useState([]);
  const [championshipTeams, setChampionshipTeams] = useState([]);

  useEffect(() => {
    setPremierTeams(
      teams && teams.filter((team) => team.division === "premier")
    );
    setChampionshipTeams(
      teams && teams.filter((team) => team.division === "championship")
    );
  }, [teams]);

  const updateTeam = (event, id, setTeams) => {
    setEditTeamModalOpen(true);
    setEditedTeam(id);
  };
  const team = teams && teams.find((team) => teamName === team.teamName);
  let link = team && `${window.location.href}${team.id}`;

  return (
    <div className="page-container">
      <div className="admin-heading">
        <div className="page-title">Teams</div>
        <div
          className="add-circle-button"
          onClick={() => setAddTeamModalOpen(true)}
        >
          <i
            className={`fa-solid fa-plus`}
            style={{ fontSize: "25px", color: "white" }}
          />
        </div>
      </div>
      <AddTeamModal
        addTeamModalOpen={addTeamModalOpen}
        setAddTeamModalOpen={setAddTeamModalOpen}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        division={division}
        setDivision={setDivision}
        setTeams={setTeams}
        teamName={teamName}
        setTeamName={setTeamName}
      />
      <EditTeamModal
        editTeamModalOpen={editTeamModalOpen}
        setEditTeamModalOpen={setEditTeamModalOpen}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        division={division}
        setDivision={setDivision}
        setTeams={setTeams}
        teamName={teamName}
        setTeamName={setTeamName}
        editedTeam={editedTeam}
      />
      <div className="division-label">Premier</div>
      {premierTeams && premierTeams.length ? (
        premierTeams.map((team, index) => (
          <div key={index}>
            <RosterIndividual
              team={team}
              setTeams={setTeams}
              setEditTeamModalOpen={setEditTeamModalOpen}
              updateTeam={updateTeam}
              setClickedTeam={setClickedTeam}
              history={history}
            />
          </div>
        ))
      ) : (
        <div>No teams found</div>
      )}
      <div className="roster-user-section">
        <div className="roster-user-label">Championship</div>
      </div>
      {championshipTeams && championshipTeams.length ? (
        championshipTeams.map((team, index) => (
          <div key={index}>
            <RosterIndividual
              team={team}
              setTeams={setTeams}
              setEditTeamModalOpen={setEditTeamModalOpen}
              updateTeam={updateTeam}
              setClickedTeam={setClickedTeam}
              history={history}
            />
            {team.id === openedLinkID ? (
              <div>
                <div>Here's your shareable link</div>
                <div>
                  <a
                    href={`${window.location.href}register/manager/${team.id}`}
                  >{`${window.location.href}register/manager/${team.id}`}</a>
                </div>
                <div>Here's your shareable player link</div>
                <div>
                  <a
                    href={`${window.location.href}register/player/${team.id}`}
                  >{`${window.location.href}register/player/${team.id}`}</a>
                </div>
                <div>Here's your shareable guest player link</div>
                <div>
                  <a
                    href={`${window.location.href}register/guestPlayer/${team.id}`}
                  >{`${window.location.href}register/guestPlayer/${team.id}`}</a>
                </div>
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div>No teams found</div>
      )}
    </div>
  );
};
export default AdminPage;

const RosterIndividual = ({
  team,
  setTeams,
  setEditTeamModalOpen,
  updateTeam,
  setClickedTeam,
  history,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Row
        className="individual-team"
        onClick={() => {
          setClickedTeam(team);
          history("/roster");
        }}
      >
        <Col>
          <div className="user-icon-circle">
            <img
              src={team.imageURL}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </Col>
        <Col style={{ textAlign: "left", fontWeight: "bold" }}>
          {team.teamName}
        </Col>
        <Col>
          <div
            className="delete-player-icon"
            onClick={(event) => {
              event.stopPropagation();
              updateTeam(team.id, setTeams);
            }}
          >
            <i className={`fa-solid fa-pencil`} style={{ fontSize: "15px" }} />
          </div>
          <div
            className="delete-player-icon"
            onClick={(event) => {
              event.stopPropagation();
              deleteTeam(team.id, setTeams);
            }}
          >
            <i
              className={`fa-solid fa-times`}
              style={{ fontSize: "15px", color: "#a24936" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
