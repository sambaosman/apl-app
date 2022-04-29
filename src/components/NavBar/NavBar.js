import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import "./NavBar.scss";
import { NavBarData } from "./NavBarData";
import logo from "../../Images/apllogo.png";
import { GoogleLogout } from "react-google-login";
import { CardButtonWithText } from "../../StyledComponents/StyledComponents";

const NavBar = ({ setLoggedIn }) => {
  const history = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleLogout = (setLoggedIn) => {
    setLoggedIn(false);
  };

  return (
    <React.Fragment>
      <Col className="nav-column">
        <div className="side-bar">
          <Row className="center" style={{ marginBottom: "10px" }}>
            <Col md="1">
              {" "}
              <img src={logo} height={40} width={40} className="grayscale" />
            </Col>
            <Col md="10">
              {" "}
              <div className="logo-title">American Premier League</div>
            </Col>
          </Row>
          <Nav>
            {NavBarData.map((navItem, index) => (
              <NavLink
                href={navItem.link}
                className={
                  activeTab !== index
                    ? "nav-option nav-link-container"
                    : "nav-option nav-link-container active"
                }
                key={index}
                onClick={() => setActiveTab(index)}
              >
                <div classname="nav-link-text">
                  <span> {navItem.icon}</span>
                  <span style={{ paddingLeft: "20px" }}>{navItem.title}</span>
                </div>
              </NavLink>
            ))}
          </Nav>
          <div style={{ marginTop: "330px" }}>
            <GoogleLogout
              clientId={
                "281501315717-3q4u5jr1fnil0eamk218j0bshq9tp8j6.apps.googleusercontent.com"
              }
              render={(renderProps) => (
                <CardButtonWithText
                  style={{
                    backgroundColor: "#F8F8F8",
                    width: "50%",
                    margin: "auto",
                  }}
                  onClick={renderProps.onClick}
                >
                  <span
                    style={{ color: "#4A4A4A", paddingLeft: "0px !important" }}
                  >
                    Sign out
                  </span>
                </CardButtonWithText>
              )}
              onLogoutSuccess={() => handleLogout(setLoggedIn)}
              cookiePolicy={"single_host_origin"}
              style={{ alignItems: "center" }}
            />
          </div>
        </div>
      </Col>

      <Row className="bottom-navbar">
        {NavBarData.map((navItem, index) => (
          <Col key={index} className="center">
            <NavLink
              href={navItem.link}
              className={
                activeTab !== index
                  ? "nav-option-icon"
                  : "nav-option-icon active"
              }
              onClick={() => setActiveTab(index)}
            >
              {navItem.icon}
            </NavLink>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};
export default NavBar;
