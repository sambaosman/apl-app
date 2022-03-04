import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import RegistrationInputGroup from "./RegistrationInputGroup";
import {
  Link,
  Routes,
  Route,
  useNavigate,
  createSearchParams,
} from "react-router-dom";

const RegistrationSelector = ({ formFields }) => {
  const registrationTypes = [
    {
      type: "player",
      name: "player",
      icon: "user",
    },
    {
      type: "guestPlayer",
      name: "guest player",
      icon: "user",
    },
    {
      type: "manager",
      name: "manager",
      icon: "user-tie",
    },
  ];

  const { teamMemberType } = formFields;
  const history = useNavigate();

  return (
    <React.Fragment>
      <div className="login-container">
        <React.Fragment>
          <div className="app-title" style={{ paddingBottom: "10px" }}>
            Register for APL
          </div>
          {registrationTypes.map((registrationType, index) => (
            <Row
              className="selector-row"
              key={index}
              onClick={() => history(`/register/${registrationType.type}`)}
            >
              <Col>
                <div className="registration-selector-icon">
                  <i className={`fa-solid fa-${registrationType.icon}`} />
                </div>
              </Col>
              <Col style={{ minWidth: "200px" }}>
                I am a {registrationType.name}
              </Col>
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
            <Link to="/login">
              <span className="login-subsection-link" type="submit">
                Log in
              </span>
            </Link>
          </div>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default RegistrationSelector;
