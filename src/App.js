import "./App.css";
import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Login from "./LoginRegistration/Login/Login.js";
import { getUsers } from "./server/ApiFunctions";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import NavBar from "./components/NavBar/NavBar";
import { Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userTeamArray, setUserTeamArray] = useState([]);
  const [googleData, setGoogleData] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const addUsers = (currentUser) => {
    dispatch(addUser(currentUser));
  };

  const handleLogin = async (googleData) => {
    getUsers(googleData, addUsers, setLoggedIn);
  };

  const handleFailure = (result) => {
    console.log("error:", result);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {user ? (
          <Row>
            <NavBar setLoggedIn={setLoggedIn} />
            <Col>
              <div className="page-container">
                <AppRoutes
                  setLoggedIn={setLoggedIn}
                  userTeamArray={userTeamArray}
                  googleData={googleData}
                  setUserTeamArray={setUserTeamArray}
                />
              </div>
            </Col>
          </Row>
        ) : (
          <Login handleLogin={handleLogin} handleFailure={handleFailure} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
