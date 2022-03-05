import "./App.css";
import React, { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import {
  AssessLoggedInState,
  signOut,
} from "./LoginRegistration/LoginRegistrationFunctions";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    AssessLoggedInState(setLoggedIn);
  }, []);

  console.log("logged in", loggedIn);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-container">
          <AppRoutes
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            signOut={signOut}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
