import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  const history = useNavigate();

  return (
    <div>
      <Nav>
        <NavLink href="#">Teams</NavLink>
      </Nav>
    </div>
  );
};
export default NavBar;
