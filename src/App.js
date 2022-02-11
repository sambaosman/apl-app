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

  const handleSubmit = async () => {
    const form = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    const newForm = await DataStore.save(new Form(form));
  };

  const deletePlayerHandler = async (form) => {
    const toDelete = await DataStore.query(Form, form.id);
    await DataStore.delete(toDelete);
    const models = await DataStore.query(Form);
    setForms(models);
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
            element={
              <RegisteredList
                forms={forms}
                setForms={setForms}
                deletePlayerHandler={deletePlayerHandler}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
