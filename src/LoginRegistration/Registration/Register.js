import { Auth } from "aws-amplify";
import React, { useState } from "react";
import RegistrationInputGroup from "./RegistrationInputGroup";
import LoginPage from "../Login/LoginPage";
const Register = () => {
  const initialFormFields = {
    username: "",
    lastName: "",
    email: "",
    jerseyNumber: "",
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
    const { firstName, lastName, email, jerseyNumber, password, code } =
      formFields;
    await Auth.confirmSignUp(email, code);
    setFormFields(() => ({ ...formFields, formType: "signIn" }));
  };
  const { formType } = formFields;
  return (
    <React.Fragment>
      {formType === "signIn" && <LoginPage />}
      {formType === "register" && (
        <RegistrationInputGroup
          customField={"jerseyNumber"}
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
