import "./App.css";
import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Login from "./LoginRegistration/Login/Login.js";
import { getUsers } from "./server/endpoints/userEndpoints";
import { useDispatch } from "react-redux";
import { addOrUpdateUser } from "./redux/userSlice";
import NavBar from "./components/NavBar/NavBar";
import { Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

function App() {
  const [userTeamArray, setUserTeamArray] = useState([]);
  const [googleData, setGoogleData] = useState({});

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const addUsers = (currentUser) => {
    dispatch(addOrUpdateUser(currentUser));
  };

  const handleLogin = async (googleData) => {
    getUsers(googleData, addUsers);
  };

  const handleFailure = (result) => {
    console.log("error:", result);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {user ? (
          <Row>
            <NavBar />
            <Col>
              <div className="page-container">
                <AppRoutes
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
