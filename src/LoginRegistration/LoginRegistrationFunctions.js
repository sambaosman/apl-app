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
  setFormFields(() => ({ ...formFields, formType: "confirmRegistration" }));
};
