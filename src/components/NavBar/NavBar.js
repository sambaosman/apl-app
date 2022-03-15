import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import "./NavBar.scss";
import { NavBarData } from "./NavBarData";
import logo from "../../Images/apllogo.png";

const NavBar = () => {
  const history = useNavigate();

  return (
    <div className="side-bar">
      <Row className="center">
        <Col md="2">
          {" "}
          <img src={logo} height={50} width={50} />
        </Col>
        <Col md="10">
          {" "}
          <div className="logo-title">American Premier League</div>
        </Col>
      </Row>
      <Nav>
        {NavBarData.map((navItem, index) => (
          <div className="nav-row">
            <NavLink
              href={navItem.link}
              className="nav-option"
              key={index}
              active
            >
              {navItem.icon}
              {navItem.title}
            </NavLink>
          </div>
        ))}
      </Nav>
    </div>
  );
};
export default NavBar;
