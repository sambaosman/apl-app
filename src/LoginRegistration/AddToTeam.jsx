import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { GoogleLogout } from "react-google-login";
import { CardButtonWithText } from "../StyledComponents/StyledComponents";
import RegistrationSelector from "./Registration/RegistrationSelector";

const AddToTeam = ({ googleData, setLoggedIn, userTeamArray }) => {
  const [linkClicked, setLinkClicked] = useState(false);

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
              onLogoutSuccess={() => setLoggedIn(false)}
              cookiePolicy={"single_host_origin"}
              style={{ alignItems: "center" }}
            />
          </div>
          <div className="admin-heading">
            <div className="page-title">{`Hello ${
              googleData &&
              googleData.profileObj &&
              googleData.profileObj.givenName
            }`}</div>
          </div>
          {linkClicked ? (
            <RegistrationSelector />
          ) : (
            <div className="link-label center">
              To begin,{" "}
              <a
                className="add-to-team-link"
                onClick={() => setLinkClicked(true)}
              >
                add yourself to a team
              </a>
            </div>
          )}
        </div>
      </Col>
    </React.Fragment>
  );
};

export default AddToTeam;
