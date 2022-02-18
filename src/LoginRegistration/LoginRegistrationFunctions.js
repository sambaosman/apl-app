import { Auth, DataStore } from "aws-amplify";
import { submitTeamMember } from "../RegistrationServices";
import { TeamMember } from "../models";
export const AssessLoggedInState = (setLoggedIn) => {
  Auth.currentAuthenticatedUser()
    .then(() => {
      setLoggedIn(true);
    })
    .catch(() => {
      setLoggedIn(false);
    });
};

export const signOut = async (setLoggedIn) => {
  try {
    await Auth.signOut();
    setLoggedIn(false);
  } catch (error) {
    console.log("error signing out", error);
  }
};

export const register = async (formFields, setFormFields, setTeamMembers) => {
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
  } = formFields;
  try {
    await Auth.signUp({
      username: email,
      password,
    });
    setFormFields(() => ({ ...formFields, formType: "confirmRegistration" }));
    submitTeamMember(
      firstName,
      lastName,
      jerseyNumber,
      teamID,
      email,
      password,
      street,
      city,
      state,
      zip,
      phoneNumber,
      setTeamMembers
    );
  } catch (error) {
    console.log("error registering", error);
  }
};
