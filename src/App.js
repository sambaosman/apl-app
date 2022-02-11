import "./App.css";
import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisteredList from "./RegisteredList";
import { DataStore } from "aws-amplify";
import { Form } from "./models";

function App() {
  const [forms, setForms] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const func = async () => {
      const models = await DataStore.query(Form);
      setForms(models);
    };
    func();
  }, []);

  const handleSubmit = async () => {
    const form = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    let newPost = await DataStore.save(new Form(form));
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RegistrationForm
                handleSubmit={handleSubmit}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
              />
            }
          ></Route>
          <Route
            path="/registered-players"
            element={<RegisteredList forms={forms} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
