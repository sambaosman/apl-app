import "./App.css";
import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Login from "./LoginRegistration/Login/Login.js";
import { getUserById, getUsers } from "./server/ApiFunctions";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userTeamArray, setUserTeamArray] = useState([]);
  const [googleData, setGoogleData] = useState([]);

  const dispatch = useDispatch();

  const handleLogin = async (googleData) => {
    getUsers(googleData);
    setGoogleData(googleData);
    dispatch(addUser(googleData));
    setLoggedIn(true);
  };

  const handleFailure = (result) => {
    console.log("error:", result);
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
          />
        ) : (
          <Login handleLogin={handleLogin} handleFailure={handleFailure} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
