import React, { useState, useEffect } from "react";
import {
  Form as ReactForm,
  FormGroup,
  Label,
  Input,
  Modal,
  Row,
  Col,
} from "reactstrap";
import { deleteTeam, updateTeam } from "./TeamServices";
import { signOut } from "./LoginRegistration/LoginRegistrationFunctions";
import { PrimaryButton } from "./StyledComponents/StyledComponents";
import AddTeamModal from "./AddTeamModal";
import EditTeamModal from "./EditTeamModal";

const AdminPage = ({
  teams,
  setTeams,
  setLoggedIn,
  history,
  setClickedTeam,
}) => {
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
    setPremierTeams(teams.filter((team) => team.division === "premier"));
    setChampionshipTeams(
      teams.filter((team) => team.division === "championship")
    );
  }, [teams]);

  const team = teams.find((team) => teamName === team.teamName);
  let link = team && `${window.location.href}${team.id}`;

  return (
    <div>
      <div
        className="add-circle-button"
        onClick={() => setAddTeamModalOpen(true)}
      >
        <i
          className={`fa-solid fa-plus`}
          style={{ fontSize: "25px", color: "white" }}
        />
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
      <div className="roster-user-section">
        <div className="roster-user-label">Premier</div>
      </div>
      {premierTeams && premierTeams.length ? (
        premierTeams.map((team, index) => (
          <div key={index}>
            <RosterIndividual
              team={team}
              setTeams={setTeams}
              setEditTeamModalOpen={setEditTeamModalOpen}
              setEditedTeam={setEditedTeam}
              showLinkHandler={showLinkHandler}
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
              setEditedTeam={setEditedTeam}
              showLinkHandler={showLinkHandler}
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

      <PrimaryButton onClick={() => signOut(setLoggedIn)}>
        {" "}
        Sign out
      </PrimaryButton>
    </div>
  );
};
export default AdminPage;

const RosterIndividual = ({
  team,
  setTeams,
  setEditTeamModalOpen,
  setEditedTeam,
  showLinkHandler,
  setClickedTeam,
  history,
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
        onClick={() => {
          setClickedTeam(team);
          history("/roster");
        }}
      >
        <Col>
          <div className="user-icon-circle"></div>
        </Col>
        <Col style={{ textAlign: "left", fontWeight: "bold" }}>
          {team.teamName}
        </Col>
        <Col>
          <div
            className="delete-player-icon"
            onClick={() => {
              setEditTeamModalOpen(true);
              setEditedTeam(team.id, setTeams);
            }}
          >
            <i className={`fa-solid fa-pencil`} style={{ fontSize: "15px" }} />
          </div>
          <div
            className="delete-player-icon"
            onClick={(event) => deleteTeam(event, team.id, setTeams)}
          >
            <i
              className={`fa-solid fa-times`}
              style={{ fontSize: "15px", color: "#a24936" }}
            />
          </div>
          <div
            className="delete-player-icon"
            onClick={(event) => {
              showLinkHandler(event, team.id);
            }}
          >
            <i className={`fa-solid fa-share`} style={{ fontSize: "15px" }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
