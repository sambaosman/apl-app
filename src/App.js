import "./App.css";
import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Login from "./LoginRegistration/Login/Login.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (googleData) => {
    setLoggedIn(true);
  };

  const handleFailure = (result) => {
    alert(result);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {loggedIn ? (
          <AppRoutes setLoggedIn={setLoggedIn} />
        ) : (
          <Login handleLogin={handleLogin} handleFailure={handleFailure} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
