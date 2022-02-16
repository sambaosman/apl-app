import React from "react";
import { Row, Col } from "reactstrap";

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
  return (
    <div className="login-container">
      <div className="app-title" style={{ paddingBottom: "10px" }}>
        Register for APL
      </div>
      {registrationTypes.map((registrationType, index) => (
        <Row className="selector-row" key={index}>
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
    </div>
  );
};

export default RegistrationSelector;
