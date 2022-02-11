import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

import { Link } from "react-router-dom";

const RegistrationForm = ({ setFirstName, setLastName, setEmail }) => {
  return (
    <React.Fragment>
      <Form>
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
        <Link to="/registered-players">
          <div>Submit</div>
        </Link>
      </Form>
    </React.Fragment>
  );
};

export default RegistrationForm;
