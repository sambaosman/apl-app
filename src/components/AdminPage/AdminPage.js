import React, { useState, useEffect } from "react";
import AddTeam from "./EditAddTeamPanel/AddTeam";
import EditTeam from "./EditAddTeamPanel/EditTeam";
import "./AdminPage.scss";
import TeamCard from "./TeamCard/TeamCard";
import { Row, Col } from "reactstrap";

const AdminPage = ({ teams, setTeams, history, setClickedTeam }) => {
  const [teamName, setTeamName] = useState(null);
  const [division, setDivision] = useState(null);
  const [showAddTeam, setShowAddTeam] = useState(false);
  const [showEditTeam, setShowEditTeam] = useState(false);
  const [editedTeam, setEditedTeam] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [premierTeams, setPremierTeams] = useState([]);
  const [championshipTeams, setChampionshipTeams] = useState([]);

  useEffect(() => {
    setPremierTeams(
      teams && teams.filter((team) => team.division === "Premier")
    );
    setChampionshipTeams(
      teams && teams.filter((team) => team.division === "Championship")
    );
  }, [teams]);

  const updateTeam = (event, id, setTeams) => {
    showEditTeam(true);
    setEditedTeam(id);
  };

  const team = teams && teams.find((team) => teamName === team.teamName);

  const closePanel = (
    setTeamName,
    setDivision,
    setShowAddTeam,
    showAddTeam
  ) => {
    setShowAddTeam(!showAddTeam);
    setTeamName("");
    setDivision("");
  };

  return (
    <React.Fragment>
      <Col className="right-column">
        <div className="page-container">
          <div className="admin-heading">
            <div className="page-title">Teams</div>
            <div
              className="add-circle-button"
              onClick={() => {
                closePanel(
                  setTeamName,
                  setDivision,
                  setShowAddTeam,
                  showAddTeam
                );
              }}
            >
              <i
                className={`fa-solid fa-plus`}
                style={{ fontSize: "25px", color: "white" }}
              />
            </div>
          </div>
          <div className="division-label">Premier</div>
          <div className="grid-wrapper">
            {premierTeams && premierTeams.length
              ? premierTeams.map((team) => (
                  <TeamCard
                    team={team}
                    setTeams={setTeams}
                    setShowEditTeam={setShowEditTeam}
                    updateTeam={updateTeam}
                    setClickedTeam={setClickedTeam}
                    history={history}
                  />
                ))
              : null}
          </div>
          <div className="division-label">Championship</div>
          <div className="grid-wrapper">
            {championshipTeams && championshipTeams.length
              ? championshipTeams.map((team, index) => (
                  <TeamCard
                    team={team}
                    setTeams={setTeams}
                    setShowEditTeam={setShowEditTeam}
                    updateTeam={updateTeam}
                    setClickedTeam={setClickedTeam}
                    history={history}
                  />
                ))
              : null}
          </div>
        </div>
      </Col>

      {showAddTeam && (
        <AddTeam
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          division={division}
          setDivision={setDivision}
          setTeams={setTeams}
          teamName={teamName}
          setTeamName={setTeamName}
          setShowAddTeam={setShowAddTeam}
          showAddTeam={showAddTeam}
          closePanel={closePanel}
        />
      )}
      {/* {showEditTeam && (
          <EditTeam
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            division={division}
            setDivision={setDivision}
            setTeams={setTeams}
            teamName={teamName}
            setTeamName={setTeamName}
            setShowAddTeam={setShowAddTeam}
            showAddTeam={showAddTeam}
            closePanel={closePanel}
          />
        )} */}
    </React.Fragment>
  );
};
export default AdminPage;
