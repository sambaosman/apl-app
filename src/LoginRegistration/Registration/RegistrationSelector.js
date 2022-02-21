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
  setError,
  error,
  teams,
  setTeamMembers,
}) => {
  const registrationTypes = [
    {
      type: "player",
      name: "player",
      icon: "user",
      link: "/register/account?type=player",
    },
    {
      type: "guestPlayer",
      name: "guest player",
      icon: "user",
      link: "/register/account?type=guestPlayer",
    },
    {
      type: "manager",
      name: "manager",
      icon: "user-tie",
      link: "/register/account?type=manager",
    },
    {
      type: "admin",
      name: "admin",
      icon: "user-gear",
      link: "/register/account?type=admin",
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
            <Link to={registrationType.link}>
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
            </Link>
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
              setError={setError}
              error={error}
              teams={teams}
              setTeamMembers={setTeamMembers}
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
              setError={setError}
              error={error}
              teams={teams}
              setTeamMembers={setTeamMembers}
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
              setError={setError}
              error={error}
              teams={teams}
              setTeamMembers={setTeamMembers}
            />
          ) : null}
        </React.Fragment>
      )}
    </div>
  );
};

export default RegistrationSelector;
