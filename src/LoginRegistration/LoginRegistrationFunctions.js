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

export const register = async (
  formFields,
  setFormFields,
  setTeamMembers,
  setError
) => {
  const { email, password, teamID } = formFields;
  try {
    await Auth.signUp({
      username: email,
      password,
    });
    submitTeamMember(formFields, setTeamMembers, setFormFields, setError);
  } catch (error) {
    setError(error);
  }
};
