import React, { useState } from "react";
import {
  Form as ReactForm,
  FormGroup,
  Label,
  Input,
  Modal,
  Row,
  Col,
} from "reactstrap";
import { addTeam, deleteTeam, updateTeam } from "./TeamServices";
import { signOut } from "./LoginRegistration/LoginRegistrationFunctions";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

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

  const team = teams.find((team) => teamName === team.teamName);
  let link = team && `${window.location.href}${team.id}`;

  const showLinkHandler = (event, id) => {
    event.stopPropagation();
    setOpenedLinkID(id);
  };

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
      <Modal
        isOpen={addTeamModalOpen}
        toggle={() => setAddTeamModalOpen(false)}
      >
        <ReactForm>
          <FormGroup>
            <Label for="firstName">Team Name</Label>
            <Input
              name="teamName"
              id="teamName"
              placeholder="Enter Team Name"
              onChange={(event) => setTeamName(event.target.value)}
            />
            <Dropdown
              isOpen={dropdownOpen}
              toggle={() => setDropdownOpen(!dropdownOpen)}
            >
              <DropdownToggle caret>
                {division ? division : "Division"}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setDivision("premier")}>
                  Premier
                </DropdownItem>
                <DropdownItem onClick={() => setDivision("championship")}>
                  Championship
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
          <button
            type="button"
            onClick={() => {
              addTeam(teamName, setTeams, division);
              setAddTeamModalOpen(false);
            }}
          >
            Add Team to APL
          </button>
        </ReactForm>
      </Modal>
      {teams &&
        teams.map((team, index) => (
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
        ))}
      <Modal
        isOpen={editTeamModalOpen}
        toggle={() => setEditTeamModalOpen(false)}
      >
        <ReactForm>
          <FormGroup>
            <Label for="teamName">Team Name</Label>
            <Input
              name="teamName"
              id="teamName"
              placeholder="Enter Team Name"
              onChange={(event) => setTeamName(event.target.value)}
            />
            <Label for="teamName">League</Label>
          </FormGroup>
          <div
            onClick={() => {
              updateTeam(editedTeam, teamName, setTeams);
              setEditTeamModalOpen(false);
            }}
          >
            Update
          </div>
        </ReactForm>
      </Modal>
      <button onClick={() => signOut(setLoggedIn)}> Sign out</button>
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
        onClick={(event) => {
          setClickedTeam(event, team);
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
            onClick={() => deleteTeam(team.id, setTeams)}
          >
            <i
              className={`fa-solid fa-times`}
              style={{ fontSize: "15px", color: "#a24936" }}
            />
          </div>
          <div
            className="delete-player-icon"
            onClick={() => {
              showLinkHandler(team.id);
            }}
          >
            <i className={`fa-solid fa-share`} style={{ fontSize: "15px" }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
