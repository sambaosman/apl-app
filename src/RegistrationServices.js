import { TeamMembers } from "./models";
import { DataStore } from "aws-amplify";

export const updateTeamMember = async (
  editedPlayer,
  firstName,
  lastName,
  email,
  getTeamMembers,
  setTeamMembers
) => {
  try {
    const original = await DataStore.query(TeamMembers, editedPlayer);
    const update = await DataStore.save(
      TeamMembers.copyOf(original, (updated) => {
        updated.firstName = firstName;
        updated.lastName = lastName;
        updated.email = email;
      })
    );
    getTeamMembers(setTeamMembers);
  } catch (err) {
    console.log(err);
  }
};

export const submitTeamMember = async (
  firstName,
  lastName,
  email,
  setTeamMembers,
  teamsID,
  guest
) => {
  const teamMember = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    teamsID: teamsID,
    guestPlayer: guest,
  };
  const newTeamMember = await DataStore.save(new TeamMembers(teamMember));
  getTeamMembers(setTeamMembers);
};

export const getTeamMembers = async (setTeamMembers, teamsID) => {
  let models = await DataStore.query(TeamMembers);
  setTeamMembers(models);
};

export const deleteTeamMember = async (teamMember, setTeamMembers) => {
  const toDelete = await DataStore.query(TeamMembers, teamMember.id);
  await DataStore.delete(toDelete);
  getTeamMembers(setTeamMembers);
};
