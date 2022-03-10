import { DataStore } from "aws-amplify";
import { submitTeamMember } from "../RegistrationServices";
import { TeamMember } from "../models";

export const register = async (
  formFields,
  setFormFields,
  setTeamMembers,
  setError,
  history
) => {
  try {
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
