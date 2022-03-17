import React, { useState, useEffect } from "react";
import EditTeamModal from "../../EditTeamModal";
import AddTeam from "./EditAddTeamPanel/AddTeam";
import "./AdminPage.scss";
import TeamCard from "./TeamCard/TeamCard";
import { Row, Col } from "reactstrap";

const AdminPage = ({ teams, setTeams, history, setClickedTeam }) => {
  const [teamName, setTeamName] = useState(null);
  const [division, setDivision] = useState(null);
  const [showAddTeam, setShowAddTeam] = useState(false);
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

  return (
    <React.Fragment>
      <Col className="right-column">
        <div className="page-container">
          <div className="admin-heading">
            <div className="page-title">Teams</div>
            <div
              className="add-circle-button"
              onClick={() => setShowAddTeam(!showAddTeam)}
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
                    setEditTeamModalOpen={setEditTeamModalOpen}
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
                    setEditTeamModalOpen={setEditTeamModalOpen}
                    updateTeam={updateTeam}
                    setClickedTeam={setClickedTeam}
                    history={history}
                  />
                ))
              : null}
          </div>
          {/* <AddTeamModal
        addTeamModalOpen={addTeamModalOpen}
        setAddTeamModalOpen={setAddTeamModalOpen}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        division={division}
        setDivision={setDivision}
        setTeams={setTeams}
        teamName={teamName}
        setTeamName={setTeamName}
      /> */}
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
        />
      )}
    </React.Fragment>
  );
};
export default AdminPage;