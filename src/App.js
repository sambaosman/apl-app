import "./App.css";
import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisteredList from "./RegisteredList";
import AdminPage from "./AdminPage";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { submitForm, getForms, deleteForm } from "./RegistrationServices";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  const [forms, setForms] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [teamsID, setTeamsID] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<AdminPage signOut={signOut} user={user} />}
          ></Route>
          <Route
            path={"/f6ae81a1-e726-45e9-91aa-5952858c476e"}
            element={
              <RegistrationForm
                submitForm={submitForm}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                firstName={firstName}
                lastName={lastName}
                email={email}
                setForms={setForms}
                setTeamsID={setTeamsID}
              />
            }
          ></Route>
          <Route
            path={`/f6ae81a1-e726-45e9-91aa-5952858c476e/registered-players`}
            element={
              <RegisteredList
                submitForm={submitForm}
                forms={forms}
                setForms={setForms}
                deleteForm={deleteForm}
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

export default withAuthenticator(App);
