import { Auth } from "aws-amplify";
import React, { useState } from "react";
import RegistrationInputGroup from "./RegistrationInputGroup";
import RegistrationSelector from "./RegistrationSelector";
import { register } from "../LoginRegistrationFunctions";
const Register = () => {
  const initialFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    jerseyNumber: "",
    teamID: "",
    password: "",
    code: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    teamMemberType: "",
    formType: "register",
  };
  const [formFields, setFormFields] = useState(initialFormFields);

  const handleOnChange = (e) => {
    e.persist();
    setFormFields(() => ({ ...formFields, [e.target.name]: e.target.value }));
  };

  const confirmRegistration = async () => {
    const { email, code } = formFields;
    await Auth.confirmSignUp(email, code);
    setFormFields(() => ({ ...formFields, formType: "signIn" }));
  };
  const { formType } = formFields;
  return (
    <React.Fragment>
      {formType === "register" && <RegistrationSelector />}
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
