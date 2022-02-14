import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form as ReactForm, FormGroup, Label, Input, Modal } from "reactstrap";
import { addTeam, deleteTeam, updateTeam } from "./TeamServices";

const AdminPage = ({ signOut, user, teams, setTeams }) => {
  const [teamName, setTeamName] = useState(null);
  const [addTeamModalOpen, setAddTeamModalOpen] = useState(false);
  const [editTeamModalOpen, setEditTeamModalOpen] = useState(false);
  const [editedTeam, setEditedTeam] = useState(null);

  let link = `${window.location.href}${teams.pop() && teams.pop().id}`;

  return (
    <div>
      {/* <Link to="/registration-form">
        <button>Go To Form</button>
      </Link> */}
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
      {teams && teams.pop() && (
        <div>
          <div>Here's your shareable link</div>
          <div>
            <a href={link}>{link}</a>
          </div>
        </div>
      )}
      {/* {teams &&
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
          </div>
        ))} */}
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
      <button onClick={signOut}> Sign out</button>
    </div>
  );
};
export default AdminPage;
