import React, { useState } from "react";
import { Form as ReactForm, FormGroup, Label, Input, Modal } from "reactstrap";
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

  const showLinkHandler = (id) => {
    setOpenedLinkID(id);
  };

  return (
    <div>
      <button onClick={() => setAddTeamModalOpen(true)}>Add Team</button>
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
            {team.teamName}
            <div>{team.division}</div>
            <button onClick={() => deleteTeam(team.id, setTeams)}>
              Delete
            </button>
            <button
              onClick={() => {
                setEditTeamModalOpen(true);
                setEditedTeam(team.id, setTeams);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                showLinkHandler(team.id);
              }}
            >
              See shareable link
            </button>
            <button
              onClick={() => {
                setClickedTeam(team);
                history("/roster");
              }}
            >
              See roster
            </button>
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
