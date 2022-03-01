import { TeamMember } from "./models";
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
    const original = await DataStore.query(TeamMember, editedPlayer);
    const update = await DataStore.save(
      TeamMember.copyOf(original, (updated) => {
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
  formFields,
  setTeamMembers,
  setFormFields,
  setError,
  history
) => {
  const {
    firstName,
    lastName,
    email,
    jerseyNumber,
    teamID,
    password,
    street,
    city,
    state,
    zip,
    phoneNumber,
    teamMemberType,
  } = formFields;
  const teamMember = {
    firstName: firstName,
    lastName: lastName,
    jerseyNumber: jerseyNumber,
    email: email,
    teamsID: teamID,
    street: street,
    city: city,
    state: state,
    zip: zip,
    phoneNumber: phoneNumber,
    teamMemberType: teamMemberType,
  };
  try {
    const newTeamMember = await DataStore.save(new TeamMember(teamMember));
    getTeamMembers(setTeamMembers);
    setFormFields(() => ({ ...formFields, formType: "confirmRegistration" }));
    history("/register/authCode");
  } catch (error) {
    setError(error);
  }
};

export const getTeamMembers = async (setTeamMembers) => {
  let models = await DataStore.query(TeamMember);
  setTeamMembers(models);
};

export const deleteTeamMember = async (teamMember, setTeamMembers) => {
  const toDelete = await DataStore.query(TeamMember, teamMember.id);
  await DataStore.delete(toDelete);
  getTeamMembers(setTeamMembers);
};
