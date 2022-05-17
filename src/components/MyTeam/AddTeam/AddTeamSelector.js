import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { updateUser } from "../../../server/endpoints/userEndpoints";
import {
  TextInputWhite,
  CardButtonWithText,
} from "../../../StyledComponents/StyledComponents";
import { useSelector, useDispatch } from "react-redux";
import { addOrUpdateUser } from "../../../redux/userSlice";
import { cloneDeep } from "lodash";

const AddTeamSelectorWrapper = ({
  googleData,
  setUserTeam,
  setTeamId,
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

  const dispatch = useDispatch();

  const [showTeamIdInput, setShowTeamIdInput] = useState(false);
  const [teamArray, setTeamArray] = useState([]);

  let currentUser = useSelector((state) => state.user.user);

  const addUserTeam = (teamArray, setTeamArray, teamId, userTeam) => {
    let array = cloneDeep(currentUser.teams);
    array.push({ teamId: teamId, user: userTeam });
    updateUser(currentUser, array, dispatch(addOrUpdateUser()));
  };

  return (
    <div className="app-container">
      <div className="login-container">
        <React.Fragment>
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
                    addUserTeam(teamArray, setTeamArray, teamId, userTeam)
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
        </React.Fragment>
      </div>
    </div>
  );
};

export default AddTeamSelectorWrapper;
