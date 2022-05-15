import React, { useState, useEffect } from "react";
import TeamCard from "../AdminPage/TeamCard/TeamCard";
import { GoogleLogout } from "react-google-login";
import { CardButtonWithText } from "../../StyledComponents/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/userSlice";
import { getTeamById } from "../../server/endpoints/teamEndpoints";
import AddTeamSelector from "./AddTeam/AddTeamSelector";
import { Row, Col, Card } from "reactstrap";
import { Icon } from "@iconify/react";

const MultipleTeams = ({ googleData, userTeamArray, setUserTeamArray }) => {
  const [showInput, setShowInput] = useState(false);
  const [userTeam, setUserTeam] = useState(null);
  const [teamId, setTeamId] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [teamInfoArray, setTeamInfoArray] = useState([]);

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
            )}
            {teamInfoArray && teamInfoArray.length
              ? teamInfoArray.map((team) => (
                  <Card
                    className="web-team-card"
                    // onClick={() => {
                    //   setClickedTeam(team);
                    //   history("/roster");
                    // }}
                  >
                    <div className="team-logo">
                      <img src={team.imageURL} className="image-container" />
                    </div>
                    <div className="team-card-title"> {team.teamName}</div>
                    <Row className="text-buttons">
                      <Col
                        md="6"
                        className="center"
                        style={{ paddingRight: "5px", maxWidth: "50%" }}
                      >
                        <CardButtonWithText
                          style={{
                            backgroundColor: "rgba(111, 88, 201, 0.15)",
                          }}
                          // onClick={(event) => {
                          //   event.stopPropagation();
                          //   setShowEditTeam(true);
                          //   updateTeam(team);
                          // }}
                        >
                          <span className="center">
                            <Icon color="var(--secondary" icon="bxs:pencil" />
                          </span>
                          <span className="button-title">Edit</span>
                        </CardButtonWithText>
                      </Col>
                      <Col
                        md="6"
                        className="center"
                        style={{ paddingLeft: "5px", maxWidth: "50%" }}
                      >
                        {" "}
                        <CardButtonWithText
                          style={{ backgroundColor: "rgba(211, 97, 53, 0.15)" }}
                          // onClick={(event) => {
                          //   event.stopPropagation();
                          //   deleteTeam(team.id, setTeams);
                          // }}
                        >
                          <span className="center">
                            <Icon color="var(--danger)" icon="eva:trash-fill" />
                          </span>
                          <span
                            className="button-title"
                            style={{ color: "var(--danger)" }}
                          >
                            Delete
                          </span>
                        </CardButtonWithText>
                      </Col>
                    </Row>
                  </Card>
                ))
              : null}
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default MultipleTeams;
