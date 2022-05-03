import "./App.css";
import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Login from "./LoginRegistration/Login/Login.js";
import { getUserById, getUsers } from "./server/ApiFunctions";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userTeamArray, setUserTeamArray] = useState([]);
  const [googleData, setGoogleData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (googleData) => {
    getUsers(googleData, setCurrentUser);
    setGoogleData(googleData);
    setLoggedIn(true);
  };

  const handleFailure = (result) => {
    alert(result);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {loggedIn ? (
          <AppRoutes
            setLoggedIn={setLoggedIn}
            userTeamArray={userTeamArray}
            googleData={googleData}
            setUserTeamArray={setUserTeamArray}
            currentUser={currentUser}
          />
        ) : (
          <Login
            handleLogin={handleLogin}
            handleFailure={handleFailure}
            setCurrentUser={setCurrentUser}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
