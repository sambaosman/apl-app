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

export const signOut = async (setLoggedIn, history) => {
  try {
    await Auth.signOut();
    setLoggedIn(false);
    history("/");
  } catch (error) {
    console.log("error signing out", error);
  }
};

export const register = async (
  formFields,
  setFormFields,
  setTeamMembers,
  setError,
  history
) => {
  const { email, password, teamID, teamMemberType } = formFields;
  try {
    await Auth.signUp({
      username: email,
      password,
      attributes: {
        "custom:teamID": teamID,
        "custom:userType": teamMemberType,
      },
    });
    submitTeamMember(
      formFields,
      setTeamMembers,
      setFormFields,
      setError,
      history
    );
  } catch (error) {
    setError(error);
  }
};
