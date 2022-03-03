import { Teams } from "./models";
import { DataStore } from "aws-amplify";

export const addTeam = async (event, teamName, setTeams, division) => {
  event.stopPropagation();
  const newTeam = await DataStore.save(
    new Teams({ teamName: teamName, division: division })
  );
  getTeams(setTeams);
};

export const getTeams = async (setTeams) => {
  const newTeams = await DataStore.query(Teams);
  setTeams(newTeams);
};

export const deleteTeam = async (event, teamId, setTeams) => {
  event.stopPropagation();
  const toDelete = await DataStore.query(Teams, teamId);
  await DataStore.delete(toDelete);
  getTeams(setTeams);
};

export const updateTeam = async (
  event,
  editedTeam,
  teamName,
  setTeams,
  division
) => {
  event.stopPropagation();
  try {
    const original = await DataStore.query(Teams, editedTeam);
    const update = await DataStore.save(
      Teams.copyOf(original, (updated) => {
        updated.teamName = teamName;
        updated.division = division;
      })
    );
    getTeams(setTeams);
  } catch (err) {
    console.log(err);
  }
};
