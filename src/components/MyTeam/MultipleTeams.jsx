import React, { useState, useEffect } from "react";
import TeamCard from "../AdminPage/TeamCard/TeamCard";
import { Col } from "reactstrap";
import { GoogleLogout } from "react-google-login";
import { CardButtonWithText } from "../../StyledComponents/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/userSlice";
import { getTeamById } from "../../server/endpoints/teamEndpoints";
import RegistrationSelector from "../../LoginRegistration/Registration/RegistrationSelector";

const MultipleTeams = ({
  googleData,
  setLoggedIn,
  userTeamArray,
  setUserTeamArray,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [userTeam, setUserTeam] = useState(null);
  const [teamId, setTeamId] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    let teams = [];
    user &&
      user.teams &&
      user.teams.length &&
      user.teams.map((team) => {
        getTeamById(team.teamId).then((team) => {
          teams.push(team);
        });
      });
    console.log("teams", teams);
  }, []);

  return (
    <React.Fragment>
      <Col className="right-column">
        <div className="page-container">
          <div className="page-signout-button">
            <GoogleLogout
              clientId={
                "281501315717-3q4u5jr1fnil0eamk218j0bshq9tp8j6.apps.googleusercontent.com"
              }
              render={(renderProps) => (
                <CardButtonWithText
                  style={{
                    backgroundColor: "white",
                    width: "120px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  onClick={renderProps.onClick}
                >
                  <i
                    className="fa-solid fa-arrow-right-to-bracket"
                    style={{ fontSize: "15px", color: "#4A4A4A" }}
                  />
                  <span style={{ color: "#4A4A4A", paddingLeft: "10px" }}>
                    Sign out
                  </span>
                </CardButtonWithText>
              )}
              onLogoutSuccess={() => dispatch(clearUser())}
              cookiePolicy={"single_host_origin"}
              style={{ alignItems: "center" }}
            />
          </div>
          <div className="admin-heading">
            <div className="page-title">My Teams</div>
            <div
              className="add-circle-button"
              onClick={() => setShowInput(true)}
            >
              <i
                className={`fa-solid fa-plus`}
                style={{ fontSize: "25px", color: "white" }}
              />
            </div>
          </div>
          <div style={{ margin: "auto" }}>
            {showInput && (
              <RegistrationSelector
                setUserTeam={setUserTeam}
                setTeamId={setTeamId}
                setUserTeamArray={setUserTeamArray}
                userTeamArray={userTeamArray}
                userTeam={userTeam}
                teamId={teamId}
                googleData={googleData}
                type="update"
                testFunction={() => setShowInput(false)}
              />
            )}
            {/* {premierTeams && premierTeams.length
              ? premierTeams.map((team) => (
                  <TeamCard
                    team={team}
                    setTeams={setTeams}
                    setShowEditTeam={setShowEditTeam}
                    updateTeam={updateTeam}
                    setClickedTeam={setClickedTeam}
                    history={history}
                  />
                ))
              : null} */}
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default MultipleTeams;
