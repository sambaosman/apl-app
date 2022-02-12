import "./App.css";
import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisteredList from "./RegisteredList";
import { DataStore } from "aws-amplify";
import { Form } from "./models";
import AdminPage from "./AdminPage";

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
    getForms();
  };

  const getForms = async () => {
    const models = await DataStore.query(Form);
    setForms(models);
  };

  const deletePlayerHandler = async (form) => {
    const toDelete = await DataStore.query(Form, form.id);
    await DataStore.delete(toDelete);
    const models = await DataStore.query(Form);
    getForms();
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AdminPage />}></Route>
          <Route
            path="/registration-form"
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
                handleSubmit={handleSubmit}
                forms={forms}
                setForms={setForms}
                deletePlayerHandler={deletePlayerHandler}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                firstName={firstName}
                lastName={lastName}
                email={email}
                getForms={getForms}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
