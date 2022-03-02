import { Teams } from "./models";
import { DataStore } from "aws-amplify";

export const addTeam = async (teamName, setTeams, division) => {
  const newTeam = await DataStore.save(
    new Teams({ teamName: teamName, division: division })
  );
  getTeams(setTeams);
};

export const getTeams = async (setTeams) => {
  const newTeams = await DataStore.query(Teams);
  setTeams(newTeams);
};

export const deleteTeam = async (teamId, setTeams) => {
  const toDelete = await DataStore.query(Teams, teamId);
  await DataStore.delete(toDelete);
  getTeams(setTeams);
};

export const updateTeam = async (editedTeam, teamName, setTeams) => {
  try {
    const original = await DataStore.query(Teams, editedTeam);
    const update = await DataStore.save(
      Teams.copyOf(original, (updated) => {
        updated.teamName = teamName;
      })
    );
    getTeams(setTeams);
  } catch (err) {
    console.log(err);
  }
};
