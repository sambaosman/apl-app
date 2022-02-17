import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import RegistrationInputGroup from "./RegistrationInputGroup";

const RegistrationSelector = () => {
  const registrationTypes = [
    {
      type: "player",
      icon: "user",
      link: "/",
    },
    {
      type: "guest player",
      icon: "user",
      link: "/",
    },
    {
      type: "manager",
      icon: "user-tie",
      link: "/",
    },
    {
      type: "admin",
      icon: "user-gear",
      link: "/",
    },
  ];
  const [userType, setUserType] = useState("");
  return (
    <div className="login-container">
      {!userType ? (
        <React.Fragment>
          <div className="app-title" style={{ paddingBottom: "10px" }}>
            Register for APL
          </div>
          {registrationTypes.map((registrationType, index) => (
            <Row
              className="selector-row"
              key={index}
              onClick={() => setUserType(registrationType.type)}
            >
              <Col>
                <div className="registration-selector-icon">
                  <i className={`fa-solid fa-${registrationType.icon}`} />
                </div>
              </Col>
              <Col>I am a {registrationType.type}</Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "20px",
                }}
              >
                <i className="fa-solid fa-angle-right" />
              </Col>
            </Row>
          ))}
          <div className="login-subsection">
            Already have an account?
            <span className="login-subsection-link" type="submit">
              Log in
            </span>
          </div>
        </React.Fragment>
      ) : (
        <RegistrationInputGroup
          goBack={() => setUserType()}
          customField={{ name: "jerseyNumber", placeholder: "Jersey Number" }}
          customID={{ name: "teamID", placeholder: "Team ID" }}
          // registerFunction={register}
          // setFormFields={handleOnChange}
        />
      )}
    </div>
  );
};

export default RegistrationSelector;
