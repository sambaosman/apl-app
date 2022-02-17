import { Auth } from "aws-amplify";
import React, { useState } from "react";
import RegistrationInputGroup from "./RegistrationInputGroup";
import LoginPage from "../Login/LoginPage";
const Register = () => {
  const initialFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    jerseyNumber: "",
    teamID: "",
    password: "",
    code: "",
    formType: "register",
  };
  const [formFields, setFormFields] = useState(initialFormFields);

  const handleOnChange = (e) => {
    e.persist();
    setFormFields(() => ({ ...formFields, [e.target.name]: e.target.value }));
  };
  const register = async () => {
    const { firstName, lastName, email, jerseyNumber, password } = formFields;
    await Auth.signUp({
      username: email,
      password,
      atrributes: { firstName, lastName, jerseyNumber },
    });
    setFormFields(() => ({ ...formFields, formType: "confirmRegistration" }));
  };

  const confirmRegistration = async () => {
    const { email, code } = formFields;
    await Auth.confirmSignUp(email, code);
    setFormFields(() => ({ ...formFields, formType: "signIn" }));
  };
  const { formType } = formFields;
  return (
    <React.Fragment>
      {formType === "signIn" && <LoginPage />}
      {formType === "register" && (
        <RegistrationInputGroup
          customField={{ name: "jerseyNumber", placeholder: "Jersey Number" }}
          customID={{ name: "teamID", placeholder: "Team ID" }}
          registerFunction={register}
          setFormFields={handleOnChange}
        />
      )}
      {formType === "confirmRegistration" && (
        <div>
          <input
            name="code"
            placeholder="code"
            type="code"
            onChange={(e) => handleOnChange(e)}
          />
          <button onClick={confirmRegistration}></button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Register;
