import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./NavBar.scss";

const NavBar = () => {
  const history = useNavigate();

  return (
    <div>
      <Nav>
        <NavLink href="#" className="test">
          Teams
        </NavLink>
      </Nav>
    </div>
  );
};
export default NavBar;
