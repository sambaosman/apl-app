import React from "react";
import RegistrationSelector from "./RegistrationSelector";

const Register = ({ formFields }) => {
  return (
    <React.Fragment>
      <RegistrationSelector formFields={formFields} />
    </React.Fragment>
  );
};

export default Register;
