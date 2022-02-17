import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import RegistrationInputGroup from "./RegistrationInputGroup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const RegistrationSelector = () => {
  const registrationTypes = [
    {
      type: "player",
      icon: "user",
    },
    {
      type: "guest player",
      icon: "user",
    },
    {
      type: "manager",
      icon: "user-tie",
    },
    {
      type: "admin",
      icon: "user-gear",
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
            <Link to="/login">
              <span className="login-subsection-link" type="submit">
                Log in
              </span>
            </Link>
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
