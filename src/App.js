import "./App.css";
import { DataStore } from "@aws-amplify/datastore";
import { Form } from "./models";
import React, { useState, useEffect } from "react";
import {
  Button,
  Form as ReactForm,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

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

  console.log("forms", forms);
  return (
    <div className="App">
      <ReactForm>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </ReactForm>
      {forms.map((form) => (
        <React.Fragment>
          <div>{form.firstName}</div>
          <div>{form.lastName}</div>
          <div>{form.email}</div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
