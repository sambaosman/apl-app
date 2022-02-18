import { Auth } from "aws-amplify";
import React, { useState } from "react";
import RegistrationInputGroup from "./RegistrationInputGroup";
import RegistrationSelector from "./RegistrationSelector";
import { register } from "../LoginRegistrationFunctions";
import { useNavigate } from "react-router";

//when registering, check that ManagerID/TeamID/adminID is valid

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
    phoneNumber: "",
    teamMemberType: "",
    formType: "register",
  };
  const [formFields, setFormFields] = useState(initialFormFields);
  const [error, setError] = useState();

  const history = useNavigate();
  const setTeamMemberType = (teamMemberType) => {
    setFormFields(() => ({ ...formFields, teamMemberType: teamMemberType }));
  };

  const handleOnChange = (e) => {
    e.persist();
    setFormFields(() => ({ ...formFields, [e.target.name]: e.target.value }));
  };

  const confirmRegistration = async (formFields, setFormFields, setError) => {
    const { email, code } = formFields;
    try {
      await Auth.confirmSignUp(email, code);
      setFormFields(() => ({ ...formFields, formType: "signIn" }));
      history("/login");
    } catch (error) {
      setError(error);
    }
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
          setError={setError}
          error={error}
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
            onClick={() =>
              confirmRegistration(formFields, setFormFields, setError)
            }
          >
            submit
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Register;
