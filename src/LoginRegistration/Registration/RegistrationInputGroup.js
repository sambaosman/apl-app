import React from "react";
import {
  TextInput,
  PrimaryButton,
} from "../../StyledComponents/StyledComponents";
import { Link } from "react-router-dom";

const RegistrationInputGroup = ({
  goBack,
  customField,
  customID,
  handleOnChange,
  setFormFields,
  registerFunction,
  formFields,
}) => {
  return (
    <React.Fragment>
      <div className="app-title">Register For APL</div>
      <div className="apl-about-message">
        APL is the most elite soccer league in the DMV. We are composed of
        champions and top contenders in the area that are ready to take the next
        step up.
      </div>
      <TextInput
        placeholder="First Name"
        name="firstName"
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder="Last Name"
        name="lastName"
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder="Email"
        type="email"
        name="email"
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder={customField.placeholder}
        name={customField.name}
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder={customID.placeholder}
        name={customID.name}
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder="Email"
        type="email"
        name="email"
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder="Street"
        type="street"
        name="street"
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder="Zip Code"
        type="zip"
        name="zip"
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder="City"
        type="city"
        name="city"
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder="State"
        type="state"
        name="zip"
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder="Password"
        type="password"
        name="password"
        onChange={(e) => handleOnChange(e)}
      />
      <TextInput
        placeholder="Confirm Password"
        type="password"
        name="confirmPassword"
        onChange={(e) => handleOnChange(e)}
      />
      <div className="login-subsection">
        Already have an account?
        <Link to="/login">
          <span className="login-subsection-link" type="submit">
            Log in
          </span>
        </Link>
      </div>
      <div>
        <span className="back-button-container" onClick={goBack}>
          <span className="back-button-text">
            <span style={{ paddingRight: "10px" }}>
              <i class="fa-solid fa-arrow-left" />
            </span>
            Go Back
          </span>
          <PrimaryButton
            onClick={() => registerFunction(formFields, setFormFields)}
          >
            Register
          </PrimaryButton>
        </span>
      </div>
    </React.Fragment>
  );
};

export default RegistrationInputGroup;
