import React, { useState, useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { CardButtonWithText } from "../../StyledComponents/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/userSlice";
import { getTeamById } from "../../server/endpoints/teamEndpoints";
import AddTeamSelector from "./AddTeam/AddTeamSelector";
import { Col } from "reactstrap";
import TeamCard from "../SharedComponents/TeamCard";

const MultipleTeams = ({ googleData, userTeamArray, setUserTeamArray }) => {
  const [showInput, setShowInput] = useState(false);
  const [teamId, setTeamId] = useState(null);
  const [teamInfoArray, setTeamInfoArray] = useState([]);
  const [userTeam, setUserTeam] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const getTeamInfo = async () => {
      return Promise.all(user.teams.map((item) => getTeamById(item.teamId)));
    };

    getTeamInfo().then((data) => {
      let dataArray = data.map((item) => item.data.Item);
      setTeamInfoArray(dataArray);
    });
  }, [user]);

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
              className={
                showInput ? "cancel-circle-button hover" : "add-circle-button"
              }
              onClick={() => setShowInput(!showInput)}
            >
              <i
                className={showInput ? `fa-solid fa-times` : `fa-solid fa-plus`}
                style={{ fontSize: "25px", color: "white" }}
              />
            </div>
          </div>
          <div style={{ margin: "auto" }}>
            {showInput ? (
              <AddTeamSelector
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
            ) : (
              <TeamCard teams={teamInfoArray} showButtons={false} />
            )}
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default MultipleTeams;
