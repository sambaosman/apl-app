import React, { useState, useEffect } from "react";
import { Button, Form as ReactForm, FormGroup, Label, Input } from "reactstrap";
import { DataStore } from "@aws-amplify/datastore";
import { Form } from "./models";
import { Link } from "react-router-dom";

export const RegistrationForm = ({ history }) => {
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
    <React.Fragment>
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
        <Link style={{ textDecoration: "none" }} to="/registered-players">
          <div>Submit</div>
        </Link>
      </ReactForm>
      {/* {forms.map((form, index) => (
        <React.Fragment key={index}>
          <div>{form.firstName}</div>
          <div>{form.lastName}</div>
          <div>{form.email}</div>
        </React.Fragment>
      ))} */}
    </React.Fragment>
  );
};
