import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import RegistrationInputGroup from "./RegistrationInputGroup";
import { Link } from "react-router-dom";

const RegistrationSelector = ({
  handleOnChange,
  setFormFields,
  formFields,
  register,
  setTeamMemberType,
}) => {
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
    {
      type: "admin",
      name: "admin",
      icon: "user-gear",
    },
  ];

  const { teamMemberType } = formFields;

  return (
    <div className="login-container">
      {!teamMemberType ? (
        <React.Fragment>
          <div className="app-title" style={{ paddingBottom: "10px" }}>
            Register for APL
          </div>
          {registrationTypes.map((registrationType, index) => (
            <Row
              className="selector-row"
              key={index}
              onClick={() => setTeamMemberType(registrationType.type)}
            >
              <Col>
                <div className="registration-selector-icon">
                  <i className={`fa-solid fa-${registrationType.icon}`} />
                </div>
              </Col>
              <Col>I am a {registrationType.name}</Col>
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
        <React.Fragment>
          {teamMemberType === "player" || teamMemberType === "guestPlayer" ? (
            <RegistrationInputGroup
              goBack={() => setTeamMemberType()}
              customField={{
                name: "jerseyNumber",
                placeholder: "Jersey Number",
              }}
              customID={{
                name: "teamID",
                placeholder: "Team ID",
              }}
              handleOnChange={handleOnChange}
              setFormFields={setFormFields}
              registerFunction={register}
              formFields={formFields}
            />
          ) : teamMemberType === "manager" ? (
            <RegistrationInputGroup
              goBack={() => setTeamMemberType()}
              customID={{
                name: "managerID",
                placeholder: "Manager ID",
              }}
              handleOnChange={handleOnChange}
              setFormFields={setFormFields}
              registerFunction={register}
              formFields={formFields}
            />
          ) : teamMemberType === "admin" ? (
            <RegistrationInputGroup
              goBack={() => setTeamMemberType()}
              customID={{
                name: "adminID",
                placeholder: "Admin ID",
              }}
              handleOnChange={handleOnChange}
              setFormFields={setFormFields}
              registerFunction={register}
              formFields={formFields}
            />
          ) : null}
        </React.Fragment>
      )}
    </div>
  );
};

export default RegistrationSelector;
