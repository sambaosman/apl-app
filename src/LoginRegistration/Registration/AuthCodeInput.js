import React, { useState } from "react";
import { Auth } from "aws-amplify";
import {
  NumberInput,
  PrimaryButton,
} from "../../StyledComponents/StyledComponents";
import { Row, Col } from "reactstrap";

const AuthCodeInput = ({ formFields, setFormFields, setError, history }) => {
  const [authCode, setAuthCode] = useState(new Array(6).fill(""));

  const confirmRegistration = async (formFields, setFormFields, setError) => {
    const { email } = formFields;
    try {
      await Auth.confirmSignUp(email, authCode.join(""));
      setFormFields(() => ({ ...formFields, formType: "signIn" }));
      history("/login");
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = (element, index) => {
    setAuthCode([
      ...authCode.map((d, idx) => (idx === index ? element.value : d)),
    ]);

    //focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <React.Fragment>
      <Row>
        <div className="app-title">Confirm Code</div>
      </Row>
      <Row>
        {authCode.map((data, index) => {
          return (
            <Col md="2" key={index}>
              <NumberInput
                name="code"
                type="code"
                onChange={(e) => handleChange(e.target, index)}
                maxLength="1"
                value={data}
                onFocus={(e) => e.target.select()}
              />
            </Col>
          );
        })}
      </Row>
      <PrimaryButton
        onClick={() => confirmRegistration(formFields, setFormFields, setError)}
      >
        Submit
      </PrimaryButton>
    </React.Fragment>
  );
};

export default AuthCodeInput;
