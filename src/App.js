import "./App.css";
import React, { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default withAuthenticator(App);
