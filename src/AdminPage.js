import React, { useState } from "react";
import { Form as ReactForm, FormGroup, Label, Input, Modal } from "reactstrap";
import { addTeam, deleteTeam, updateTeam } from "./TeamServices";
import { signOut } from "./LoginRegistration/LoginRegistrationFunctions";

const AdminPage = ({ teams, setTeams, setLoggedIn }) => {
  const [teamName, setTeamName] = useState(null);
  const [openedLinkID, setOpenedLinkID] = useState("");
  const [addTeamModalOpen, setAddTeamModalOpen] = useState(false);
  const [editTeamModalOpen, setEditTeamModalOpen] = useState(false);
  const [editedTeam, setEditedTeam] = useState(null);

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
          </FormGroup>
          <button
            type="button"
            onClick={() => {
              addTeam(teamName, setTeams);
              setAddTeamModalOpen(false);
            }}
          >
            Add Team to APL
          </button>
        </ReactForm>
      </Modal>
      {}
      {team && (
        <div>
          <div>Here's your shareable link</div>
          <div>
            <a href={link}>{link}</a>
          </div>
          <div>Here's your shareable guest link</div>
          <div>
            <a href={`${link}/guest`}>{`${link}/guest`}</a>
          </div>
        </div>
      )}
      {teams &&
        teams.map((team, index) => (
          <div key={index}>
            {team.teamName}
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
            {team.id === openedLinkID ? (
              <div>
                <div>Here's your shareable link</div>
                <div>
                  <a
                    href={`${window.location.href}manager/${team.id}`}
                  >{`${window.location.href}manager/${team.id}`}</a>
                </div>
                <div>Here's your shareable player link</div>
                <div>
                  <a
                    href={`${window.location.href}player/${team.id}`}
                  >{`${window.location.href}player/${team.id}`}</a>
                </div>
                <div>Here's your shareable guest player link</div>
                <div>
                  <a
                    href={`${window.location.href}guestPlayer/${team.id}`}
                  >{`${window.location.href}guestPlayer/${team.id}`}</a>
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
