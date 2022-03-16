import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import "./NavBar.scss";
import { NavBarData } from "./NavBarData";
import logo from "../../Images/apllogo.png";

const NavBar = () => {
  const history = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <React.Fragment>
      <Col className="nav-column">
        <div className="side-bar">
          <Row className="center">
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
                {navItem.icon}
                <span style={{ paddingLeft: "20px" }}>{navItem.title}</span>
              </NavLink>
            ))}
          </Nav>
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
