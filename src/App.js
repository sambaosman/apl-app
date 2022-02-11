import "./App.css";
import React from "react";
import { RegistrationForm } from "./RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPage from "./NewPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm />}></Route>
          <Route path="/registered-players" element={<NewPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
