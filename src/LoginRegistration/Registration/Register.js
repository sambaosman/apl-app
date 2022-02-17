import { Auth } from "aws-amplify";
import React, { useState } from "react";
import RegistrationInputGroup from "./RegistrationInputGroup";
import RegistrationSelector from "./RegistrationSelector";
import { register, confirmRegistration } from "../LoginRegistrationFunctions";

const Register = () => {
  const initialFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    jerseyNumber: "",
    teamID: "",
    password: "",
    code: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    teamMemberType: "",
    formType: "register",
  };
  const [formFields, setFormFields] = useState(initialFormFields);

  const setTeamMemberType = (teamMemberType) => {
    setFormFields(() => ({ ...formFields, teamMemberType: teamMemberType }));
  };

  const handleOnChange = (e) => {
    e.persist();
    setFormFields(() => ({ ...formFields, [e.target.name]: e.target.value }));
  };

  const { formType } = formFields;
  return (
    <React.Fragment>
      {formType === "register" && (
        <RegistrationSelector
          handleOnChange={handleOnChange}
          setFormFields={setFormFields}
          formFields={formFields}
          register={register}
          setTeamMemberType={setTeamMemberType}
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
          <button
            onClick={() => confirmRegistration(formFields, setFormFields)}
          ></button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Register;
