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
import {
  TextInputWhite,
  CardButtonWithText,
} from "../../StyledComponents/StyledComponents";

const RegistrationSelector = ({
  setUserTeam,
  setTeamId,
  setUserTeamArray,
  userTeamArray,
  userTeam,
  teamId,
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
  ];

  const history = useNavigate();

  const [showTeamIdInput, setShowTeamIdInput] = useState(false);

  return (
    <div className="app-container">
      <div className="login-container">
        <React.Fragment>
          {/* <div className="app-title" style={{ paddingBottom: "10px" }}>
            Register for APL
          </div> */}
          {showTeamIdInput ? (
            <Row>
              <Col md="9">
                <TextInputWhite
                  name="teamId"
                  id="teamId"
                  placeholder="Enter Team ID"
                  onChange={(e) => setTeamId(e.target.value)}
                />
              </Col>
              <Col md="3">
                {" "}
                <CardButtonWithText
                  style={{
                    backgroundColor: "var(--tertiary)",
                    marginTop: "10px",
                    height: "40px",
                  }}
                  onClick={() =>
                    setUserTeamArray([
                      ...userTeamArray,
                      { teamId: teamId, user: userTeam },
                    ])
                  }
                >
                  <span>Add</span>
                </CardButtonWithText>
              </Col>
            </Row>
          ) : (
            <React.Fragment>
              {registrationTypes.map((registrationType, index) => (
                <Row
                  className="selector-row"
                  key={index}
                  onClick={() => {
                    setUserTeam(registrationType.type);
                    setShowTeamIdInput(true);
                  }}
                  // onClick={() => history(`/register/${registrationType.type}`)}
                >
                  <Col>
                    <div className="registration-selector-icon">
                      <i
                        style={{ color: "var(--secondary)" }}
                        className={`fa-solid fa-${registrationType.icon}`}
                      />
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
            </React.Fragment>
          )}
          {/* <div className="login-subsection">
            Already have an account?
            <Link to="/login">
              <span className="login-subsection-link" type="submit">
                Log in
              </span>
            </Link>
          </div> */}
        </React.Fragment>
      </div>
    </div>
  );
};

export default RegistrationSelector;
