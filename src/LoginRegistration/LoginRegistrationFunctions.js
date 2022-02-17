import { Auth } from "aws-amplify";

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

export const register = async (formFields, setFormFields) => {
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
  } = formFields;
  try {
    await Auth.signUp({
      username: email,
      password,
      atrributes: {
        firstName,
        lastName,
        jerseyNumber,
        teamID,
        password,
        street,
        city,
        state,
        zip,
      },
    });
  } catch (error) {
    console.log("error registering", error);
  }

  setFormFields(() => ({ ...formFields, formType: "confirmRegistration" }));
};

export const confirmRegistration = async (formFields, setFormFields) => {
  const { email, code } = formFields;
  try {
    await Auth.confirmSignUp(email, code);
    setFormFields(() => ({ ...formFields, formType: "signIn" }));
  } catch (error) {
    console.log("error confirming code", error);
  }
};
