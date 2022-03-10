import React from "react";
import logo from "./Images/apllogo.png";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const history = useNavigate();

  return (
    <div className="app-header">
      <div className="logo-header-container">
        <div>
          <img src={logo} height="50" width="50" />
          <span className="header-title">American Premier League</span>
        </div>
        <div className="logout-button">Log Out</div>
      </div>
    </div>
  );
};
export default AppHeader;
