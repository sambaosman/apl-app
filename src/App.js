import "./App.css";
import React, { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminPage from "./AdminPage";
import { Auth } from "aws-amplify";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    AssessLoggedInState();
  }, []);

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.log("error signing out", error);
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          signOut={signOut}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
