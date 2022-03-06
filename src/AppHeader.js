import React from "react";
import { signOut } from "./LoginRegistration/LoginRegistrationFunctions";
import logo from "./Images/apllogo.png";
import { useNavigate } from "react-router-dom";

const AppHeader = ({ setLoggedIn }) => {
  const history = useNavigate();

  return (
    <div className="app-header">
      <div className="logo-header-container">
        <div>
          <img src={logo} height="50" width="50" />
          <span className="header-title">American Premier League</span>
        </div>
        <div
          className="logout-button"
          onClick={() => signOut(setLoggedIn, history)}
        >
          Log Out
        </div>
      </div>
    </div>
  );
};
export default AppHeader;
