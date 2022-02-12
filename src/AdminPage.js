import { DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form as ReactForm, FormGroup, Label, Input, Modal } from "reactstrap";
import { Teams } from "./models";

const AdminPage = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [teamName, setTeamName] = useState(null);
  const [teams, setTeams] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editedTeam, setEditedTeam] = useState(null);

  const addTeam = async () => {
    const newTeam = await DataStore.save(new Teams({ teamName: teamName }));
    getTeams();
  };

  const getTeams = async () => {
    const newTeams = await DataStore.query(Teams);
    setTeams(newTeams);
  };

  const deleteTeamHandler = async (teamId) => {
    const toDelete = await DataStore.query(Teams, teamId);
    await DataStore.delete(toDelete);
    getTeams();
  };

  const updateTeamHandler = async () => {
    try {
      const original = await DataStore.query(Teams, editedTeam);
      const update = await DataStore.save(
        Teams.copyOf(original, (updated) => {
          updated.teamName = teamName;
        })
      );
      getTeams();
    } catch (err) {
      console.log(err);
    }
  };

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
          <button type="button" onClick={() => addTeam()}>
            Add Team to APL
          </button>
        </ReactForm>
      ) : null}

      {teams &&
        teams.map((team, index) => (
          <div key={index}>
            {team.teamName}
            <button onClick={() => deleteTeamHandler(team.id)}>Delete</button>
            <button
              onClick={() => {
                setIsOpen(true);
                setEditedTeam(team.id);
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
          <div onClick={updateTeamHandler}>Update</div>
        </ReactForm>
      </Modal>
    </div>
  );
};
export default AdminPage;
