import "./App.css";
import React, { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";

function App({ signOut, user }) {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
