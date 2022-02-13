import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form as ReactForm, FormGroup, Label, Input, Modal } from "reactstrap";
import { addTeam, deleteTeam, updateTeam } from "./TeamServices";

const AdminPage = ({ signOut, user }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [teamName, setTeamName] = useState(null);
  const [teams, setTeams] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editedTeam, setEditedTeam] = useState(null);

  return (
    <div>
      <Link to="/registration-form">
        <button>Go To Form</button>
      </Link>
      <button onClick={() => setButtonClicked(true)}>Add Team</button>
      {buttonClicked ? (
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
          <button type="button" onClick={() => addTeam(teamName, setTeams)}>
            Add Team to APL
          </button>
        </ReactForm>
      ) : null}

      {teams &&
        teams.map((team, index) => (
          <div key={index}>
            {team.teamName}
            <button onClick={() => deleteTeam(team.id, setTeams)}>
              Delete
            </button>
            <button
              onClick={() => {
                setIsOpen(true);
                setEditedTeam(team.id, setTeams);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
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
          <div onClick={() => updateTeam(editedTeam, teamName, setTeams)}>
            Update
          </div>
        </ReactForm>
      </Modal>
      <div>Hello {user.attributes.preferred_username}</div>
      <button onClick={signOut}> Sign out</button>
    </div>
  );
};
export default AdminPage;
